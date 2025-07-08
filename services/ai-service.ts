import { BiometricData, MoodEntry, User, AIRecommendation } from '../app/generated/prisma';

export interface StressPredictionInput {
  biometricData: BiometricData[];
  moodEntries: MoodEntry[];
  userPreferences: any;
  environmentalFactors: {
    weather: string;
    timeOfDay: string;
    location: string;
    calendarEvents: any[];
  };
}

export interface MoodDetectionResult {
  mood: string;
  confidence: number;
  stressLevel: number;
  triggers: string[];
}

export interface WellnessRecommendation {
  type: 'meditation' | 'exercise' | 'break' | 'social' | 'sleep';
  title: string;
  description: string;
  priority: number;
  reasoning: string;
  duration?: number;
  intensity?: 'low' | 'moderate' | 'high';
  actionUrl?: string;
}

export class AIService {
  private static instance: AIService;

  private constructor() {}

  static getInstance(): AIService {
    if (!AIService.instance) {
      AIService.instance = new AIService();
    }
    return AIService.instance;
  }

  /**
   * Predicts stress levels based on biometric data and user patterns
   */
  async predictStress(input: StressPredictionInput): Promise<{
    predictedStressLevel: number;
    confidence: number;
    predictedAt: Date;
    triggers: string[];
    recommendedInterventions: string[];
  }> {
    // Analyze recent biometric data
    const recentBiometric = input.biometricData
      .filter(data => {
        const hoursAgo = (Date.now() - data.timestamp.getTime()) / (1000 * 60 * 60);
        return hoursAgo <= 24; // Last 24 hours
      })
      .sort((a, b) => b.timestamp.getTime() - a.timestamp.getTime());

    // Analyze mood patterns
    const recentMoods = input.moodEntries
      .filter(mood => {
        const hoursAgo = (Date.now() - mood.timestamp.getTime()) / (1000 * 60 * 60);
        return hoursAgo <= 24;
      })
      .sort((a, b) => b.timestamp.getTime() - a.timestamp.getTime());

    // Calculate stress indicators
    const stressIndicators = this.calculateStressIndicators(recentBiometric, recentMoods);
    
    // Apply environmental factors
    const environmentalStress = this.calculateEnvironmentalStress(input.environmentalFactors);
    
    // Combine factors for final prediction
    const baseStressLevel = stressIndicators.averageStress;
    const environmentalModifier = environmentalStress.modifier;
    const predictedStressLevel = Math.min(10, Math.max(1, baseStressLevel + environmentalModifier));
    
    // Calculate confidence based on data quality
    const confidence = this.calculateConfidence(recentBiometric.length, recentMoods.length);
    
    // Predict when stress will occur (next 2-4 hours)
    const predictedAt = new Date(Date.now() + (2 + Math.random() * 2) * 60 * 60 * 1000);
    
    // Identify triggers
    const triggers = this.identifyTriggers(stressIndicators, input.environmentalFactors);
    
    // Generate recommended interventions
    const recommendedInterventions = this.generateInterventions(predictedStressLevel, triggers);

    return {
      predictedStressLevel: Math.round(predictedStressLevel),
      confidence,
      predictedAt,
      triggers,
      recommendedInterventions
    };
  }

  /**
   * Detects mood from various sources (voice, facial, text)
   */
  async detectMood(source: 'voice' | 'facial' | 'text', data: any): Promise<MoodDetectionResult> {
    switch (source) {
      case 'voice':
        return this.analyzeVoiceSentiment(data);
      case 'facial':
        return this.analyzeFacialExpression(data);
      case 'text':
        return this.analyzeTextSentiment(data);
      default:
        throw new Error(`Unsupported mood detection source: ${source}`);
    }
  }

  /**
   * Generates personalized wellness recommendations
   */
  async generateRecommendations(
    user: User,
    currentStressLevel: number,
    recentActivity: any[]
  ): Promise<WellnessRecommendation[]> {
    const recommendations: WellnessRecommendation[] = [];
    
    // High stress recommendations
    if (currentStressLevel >= 7) {
      recommendations.push({
        type: 'meditation',
        title: 'Quick Stress Relief Session',
        description: '5-minute breathing exercise to immediately reduce stress',
        priority: 5,
        reasoning: 'High stress detected - immediate intervention needed',
        duration: 5,
        intensity: 'low',
        actionUrl: '/meditation/quick-relief'
      });
      
      recommendations.push({
        type: 'break',
        title: 'Take a Mindful Break',
        description: 'Step away from your current activity for 10 minutes',
        priority: 4,
        reasoning: 'High stress levels indicate need for immediate break',
        duration: 10,
        intensity: 'low'
      });
    }
    
    // Moderate stress recommendations
    else if (currentStressLevel >= 4) {
      recommendations.push({
        type: 'exercise',
        title: 'Light Movement Session',
        description: 'Gentle stretching or walking to release tension',
        priority: 3,
        reasoning: 'Moderate stress - physical activity can help release tension',
        duration: 15,
        intensity: 'low',
        actionUrl: '/exercise/light-movement'
      });
    }
    
    // Low stress - proactive wellness
    else {
      recommendations.push({
        type: 'social',
        title: 'Connect with Friends',
        description: 'Reach out to someone you care about',
        priority: 2,
        reasoning: 'Good time to strengthen social connections',
        actionUrl: '/social/connect'
      });
      
      recommendations.push({
        type: 'sleep',
        title: 'Optimize Sleep Preparation',
        description: 'Prepare for optimal sleep quality tonight',
        priority: 2,
        reasoning: 'Proactive sleep optimization for tomorrow',
        actionUrl: '/sleep/optimize'
      });
    }
    
    return recommendations.sort((a, b) => b.priority - a.priority);
  }

  private calculateStressIndicators(biometricData: BiometricData[], moodEntries: MoodEntry[]) {
    let totalStress = 0;
    let count = 0;
    
    // Calculate from biometric data
    biometricData.forEach(data => {
      if (data.stressLevel) {
        totalStress += data.stressLevel;
        count++;
      }
      
      // High heart rate variability can indicate stress
      if (data.heartRateVariability && data.heartRateVariability > 100) {
        totalStress += 2;
        count++;
      }
    });
    
    // Calculate from mood entries
    moodEntries.forEach(mood => {
      const moodStressMap: { [key: string]: number } = {
        'stressed': 8,
        'anxious': 7,
        'overwhelmed': 9,
        'frustrated': 6,
        'calm': 2,
        'happy': 1,
        'content': 2,
        'sad': 5
      };
      
      if (moodStressMap[mood.mood]) {
        totalStress += moodStressMap[mood.mood];
        count++;
      }
    });
    
    return {
      averageStress: count > 0 ? totalStress / count : 5,
      dataPoints: count
    };
  }

  private calculateEnvironmentalStress(factors: any) {
    let modifier = 0;
    
    // Weather impact
    const weatherStressMap: { [key: string]: number } = {
      'rainy': 1,
      'stormy': 2,
      'sunny': -0.5,
      'cloudy': 0.5
    };
    
    if (weatherStressMap[factors.weather]) {
      modifier += weatherStressMap[factors.weather];
    }
    
    // Time of day impact
    const timeStressMap: { [key: string]: number } = {
      'morning': -0.5,
      'afternoon': 0.5,
      'evening': 1,
      'night': 0
    };
    
    if (timeStressMap[factors.timeOfDay]) {
      modifier += timeStressMap[factors.timeOfDay];
    }
    
    // Calendar events impact
    if (factors.calendarEvents && factors.calendarEvents.length > 3) {
      modifier += 1; // Many events can be stressful
    }
    
    return { modifier };
  }

  private calculateConfidence(biometricCount: number, moodCount: number): number {
    const totalDataPoints = biometricCount + moodCount;
    
    if (totalDataPoints >= 10) return 0.9;
    if (totalDataPoints >= 5) return 0.7;
    if (totalDataPoints >= 2) return 0.5;
    return 0.3;
  }

  private identifyTriggers(stressIndicators: any, environmentalFactors: any): string[] {
    const triggers: string[] = [];
    
    if (stressIndicators.averageStress > 7) {
      triggers.push('High stress levels detected');
    }
    
    if (environmentalFactors.calendarEvents?.length > 3) {
      triggers.push('Busy schedule');
    }
    
    if (environmentalFactors.weather === 'rainy' || environmentalFactors.weather === 'stormy') {
      triggers.push('Weather conditions');
    }
    
    if (environmentalFactors.timeOfDay === 'evening') {
      triggers.push('End of day fatigue');
    }
    
    return triggers;
  }

  private generateInterventions(stressLevel: number, triggers: string[]): string[] {
    const interventions: string[] = [];
    
    if (stressLevel >= 8) {
      interventions.push('Immediate breathing exercise');
      interventions.push('Take a 15-minute break');
      interventions.push('Listen to calming music');
    } else if (stressLevel >= 5) {
      interventions.push('Light stretching session');
      interventions.push('Mindful walking');
      interventions.push('Progressive muscle relaxation');
    } else {
      interventions.push('Maintain current wellness routine');
      interventions.push('Plan for tomorrow');
    }
    
    return interventions;
  }

  private async analyzeVoiceSentiment(audioData: any): Promise<MoodDetectionResult> {
    // Simulate voice sentiment analysis
    // In production, this would use a real ML model
    const sentiment = Math.random();
    const mood = sentiment > 0.7 ? 'happy' : sentiment > 0.4 ? 'neutral' : 'stressed';
    
    return {
      mood,
      confidence: 0.8,
      stressLevel: Math.round((1 - sentiment) * 10),
      triggers: []
    };
  }

  private async analyzeFacialExpression(imageData: any): Promise<MoodDetectionResult> {
    // Simulate facial expression analysis
    // In production, this would use computer vision models
    const expressions = ['happy', 'neutral', 'sad', 'stressed'];
    const mood = expressions[Math.floor(Math.random() * expressions.length)];
    
    return {
      mood,
      confidence: 0.85,
      stressLevel: mood === 'stressed' ? 8 : mood === 'sad' ? 5 : mood === 'happy' ? 2 : 4,
      triggers: []
    };
  }

  private async analyzeTextSentiment(text: string): Promise<MoodDetectionResult> {
    // Simulate text sentiment analysis
    // In production, this would use NLP models
    const positiveWords = ['happy', 'good', 'great', 'excellent', 'wonderful'];
    const negativeWords = ['sad', 'bad', 'terrible', 'awful', 'stressed'];
    
    const textLower = text.toLowerCase();
    let positiveCount = 0;
    let negativeCount = 0;
    
    positiveWords.forEach(word => {
      if (textLower.includes(word)) positiveCount++;
    });
    
    negativeWords.forEach(word => {
      if (textLower.includes(word)) negativeCount++;
    });
    
    let mood = 'neutral';
    let stressLevel = 5;
    
    if (positiveCount > negativeCount) {
      mood = 'happy';
      stressLevel = 2;
    } else if (negativeCount > positiveCount) {
      mood = 'stressed';
      stressLevel = 8;
    }
    
    return {
      mood,
      confidence: 0.75,
      stressLevel,
      triggers: []
    };
  }
} 