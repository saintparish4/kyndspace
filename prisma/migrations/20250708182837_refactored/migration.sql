-- AlterTable
ALTER TABLE "Booking" ADD COLUMN     "aiSuggested" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "predictedEffectiveness" DOUBLE PRECISION;

-- AlterTable
ALTER TABLE "Class" ADD COLUMN     "adaptiveContent" JSONB,
ADD COLUMN     "aiOptimized" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "intensity" TEXT NOT NULL DEFAULT 'moderate',
ADD COLUMN     "prerequisites" JSONB,
ADD COLUMN     "stressLevel" INTEGER;

-- AlterTable
ALTER TABLE "Habit" ADD COLUMN     "adaptiveReminder" JSONB,
ADD COLUMN     "aiSuggested" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "difficultyLevel" INTEGER DEFAULT 5;

-- AlterTable
ALTER TABLE "JournalEntry" ADD COLUMN     "emotionScores" JSONB,
ADD COLUMN     "mood" TEXT,
ADD COLUMN     "sentiment" DOUBLE PRECISION,
ADD COLUMN     "stressLevel" INTEGER,
ADD COLUMN     "topics" JSONB;

-- AlterTable
ALTER TABLE "users" ADD COLUMN     "aiCoachEnabled" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "baseStressLevel" INTEGER DEFAULT 5,
ADD COLUMN     "biometricSyncEnabled" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "personalityProfile" JSONB,
ADD COLUMN     "preferences" JSONB,
ADD COLUMN     "sleepGoal" DOUBLE PRECISION DEFAULT 8.0,
ADD COLUMN     "stepsGoal" INTEGER DEFAULT 10000,
ADD COLUMN     "timezone" TEXT NOT NULL DEFAULT 'UTC',
ADD COLUMN     "workSchedule" JSONB;

-- CreateTable
CREATE TABLE "BiometricData" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "heartRate" INTEGER,
    "heartRateVariability" DOUBLE PRECISION,
    "stressLevel" INTEGER,
    "sleepQuality" INTEGER,
    "sleepDuration" DOUBLE PRECISION,
    "steps" INTEGER,
    "calories" INTEGER,
    "respiratoryRate" INTEGER,
    "skinTemperature" DOUBLE PRECISION,
    "bloodPressureSystolic" INTEGER,
    "bloodPressureDiastolic" INTEGER,
    "oxygenSaturation" DOUBLE PRECISION,
    "wellnessScore" DOUBLE PRECISION,
    "energyLevel" INTEGER,
    "recoveryScore" DOUBLE PRECISION,
    "deviceType" TEXT,
    "deviceId" TEXT,
    "accuracy" DOUBLE PRECISION,
    "timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "BiometricData_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MoodEntry" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "mood" TEXT NOT NULL,
    "confidence" DOUBLE PRECISION NOT NULL,
    "source" TEXT NOT NULL,
    "emotions" JSONB,
    "valence" DOUBLE PRECISION,
    "arousal" DOUBLE PRECISION,
    "location" TEXT,
    "weather" TEXT,
    "timeOfDay" TEXT,
    "activity" TEXT,
    "voiceFeatures" JSONB,
    "timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "MoodEntry_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "StressPrediction" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "predictedStressLevel" INTEGER NOT NULL,
    "confidence" DOUBLE PRECISION NOT NULL,
    "predictedAt" TIMESTAMP(3) NOT NULL,
    "modelVersion" TEXT,
    "triggers" JSONB,
    "riskFactors" JSONB,
    "recommendedInterventions" JSONB,
    "preventionStrategies" JSONB,
    "actualStressLevel" INTEGER,
    "wasAccurate" BOOLEAN,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "StressPrediction_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "WellnessChallenge" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "duration" INTEGER NOT NULL,
    "target" JSONB NOT NULL,
    "reward" TEXT,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "startDate" TIMESTAMP(3) NOT NULL,
    "endDate" TIMESTAMP(3) NOT NULL,
    "maxParticipants" INTEGER DEFAULT 10,
    "isPublic" BOOLEAN NOT NULL DEFAULT false,
    "teamBased" BOOLEAN NOT NULL DEFAULT false,
    "aiGenerated" BOOLEAN NOT NULL DEFAULT false,
    "adaptiveDifficulty" BOOLEAN NOT NULL DEFAULT false,
    "personalizedGoals" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "WellnessChallenge_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ChallengeParticipant" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "challengeId" TEXT NOT NULL,
    "progress" JSONB NOT NULL,
    "completed" BOOLEAN NOT NULL DEFAULT false,
    "currentStreak" INTEGER NOT NULL DEFAULT 0,
    "bestStreak" INTEGER NOT NULL DEFAULT 0,
    "rank" INTEGER,
    "joinedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "completedAt" TIMESTAMP(3),

    CONSTRAINT "ChallengeParticipant_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AIRecommendation" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "priority" INTEGER NOT NULL,
    "reasoning" TEXT NOT NULL,
    "actionUrl" TEXT,
    "duration" INTEGER,
    "intensity" TEXT,
    "triggeredBy" JSONB,
    "biometricState" JSONB,
    "effectivenessScore" DOUBLE PRECISION,
    "isRead" BOOLEAN NOT NULL DEFAULT false,
    "isCompleted" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "expiresAt" TIMESTAMP(3),
    "completedAt" TIMESTAMP(3),

    CONSTRAINT "AIRecommendation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DeviceConnection" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "deviceType" TEXT NOT NULL,
    "deviceId" TEXT NOT NULL,
    "deviceName" TEXT,
    "isConnected" BOOLEAN NOT NULL DEFAULT false,
    "lastSync" TIMESTAMP(3),
    "syncInterval" INTEGER,
    "reliability" DOUBLE PRECISION,
    "batteryLevel" INTEGER,
    "signalStrength" DOUBLE PRECISION,
    "permissions" JSONB NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "DeviceConnection_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "WellnessSession" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "sessionType" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "duration" INTEGER NOT NULL,
    "startingStress" INTEGER,
    "endingStress" INTEGER,
    "adaptations" JSONB,
    "avgHeartRate" INTEGER,
    "stressReduction" DOUBLE PRECISION,
    "userRating" INTEGER,
    "completionRate" DOUBLE PRECISION,
    "startedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "completedAt" TIMESTAMP(3),

    CONSTRAINT "WellnessSession_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EnvironmentalData" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "location" TEXT,
    "timezone" TEXT,
    "temperature" DOUBLE PRECISION,
    "humidity" DOUBLE PRECISION,
    "pressure" DOUBLE PRECISION,
    "weather" TEXT,
    "airQuality" INTEGER,
    "pollutants" JSONB,
    "lightLevel" DOUBLE PRECISION,
    "uvIndex" DOUBLE PRECISION,
    "noiseLevel" DOUBLE PRECISION,
    "timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "EnvironmentalData_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "WellnessGroup" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "type" TEXT NOT NULL,
    "isPublic" BOOLEAN NOT NULL DEFAULT false,
    "maxMembers" INTEGER DEFAULT 50,
    "groupGoals" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "WellnessGroup_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "GroupMembership" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "groupId" TEXT NOT NULL,
    "role" TEXT NOT NULL DEFAULT 'member',
    "shareProgress" BOOLEAN NOT NULL DEFAULT true,
    "shareGoals" BOOLEAN NOT NULL DEFAULT true,
    "joinedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "GroupMembership_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "WorkplaceIntegration" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "platform" TEXT NOT NULL,
    "enabled" BOOLEAN NOT NULL DEFAULT true,
    "frequency" TEXT NOT NULL DEFAULT 'moderate',
    "canSuggestBreaks" BOOLEAN NOT NULL DEFAULT true,
    "canAccessCalendar" BOOLEAN NOT NULL DEFAULT false,
    "canSendReminders" BOOLEAN NOT NULL DEFAULT true,
    "workHours" JSONB,
    "breakPreferences" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "WorkplaceIntegration_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "BiometricData_userId_timestamp_idx" ON "BiometricData"("userId", "timestamp");

-- CreateIndex
CREATE INDEX "BiometricData_timestamp_idx" ON "BiometricData"("timestamp");

-- CreateIndex
CREATE INDEX "BiometricData_userId_deviceType_idx" ON "BiometricData"("userId", "deviceType");

-- CreateIndex
CREATE INDEX "MoodEntry_userId_timestamp_idx" ON "MoodEntry"("userId", "timestamp");

-- CreateIndex
CREATE INDEX "MoodEntry_timestamp_idx" ON "MoodEntry"("timestamp");

-- CreateIndex
CREATE INDEX "MoodEntry_userId_mood_idx" ON "MoodEntry"("userId", "mood");

-- CreateIndex
CREATE INDEX "StressPrediction_userId_predictedAt_idx" ON "StressPrediction"("userId", "predictedAt");

-- CreateIndex
CREATE INDEX "StressPrediction_predictedAt_idx" ON "StressPrediction"("predictedAt");

-- CreateIndex
CREATE INDEX "StressPrediction_userId_confidence_idx" ON "StressPrediction"("userId", "confidence");

-- CreateIndex
CREATE INDEX "WellnessChallenge_startDate_endDate_idx" ON "WellnessChallenge"("startDate", "endDate");

-- CreateIndex
CREATE INDEX "WellnessChallenge_isActive_idx" ON "WellnessChallenge"("isActive");

-- CreateIndex
CREATE INDEX "WellnessChallenge_type_idx" ON "WellnessChallenge"("type");

-- CreateIndex
CREATE INDEX "ChallengeParticipant_userId_idx" ON "ChallengeParticipant"("userId");

-- CreateIndex
CREATE INDEX "ChallengeParticipant_challengeId_idx" ON "ChallengeParticipant"("challengeId");

-- CreateIndex
CREATE UNIQUE INDEX "ChallengeParticipant_userId_challengeId_key" ON "ChallengeParticipant"("userId", "challengeId");

-- CreateIndex
CREATE INDEX "AIRecommendation_userId_createdAt_idx" ON "AIRecommendation"("userId", "createdAt");

-- CreateIndex
CREATE INDEX "AIRecommendation_isRead_idx" ON "AIRecommendation"("isRead");

-- CreateIndex
CREATE INDEX "AIRecommendation_expiresAt_idx" ON "AIRecommendation"("expiresAt");

-- CreateIndex
CREATE INDEX "AIRecommendation_userId_priority_idx" ON "AIRecommendation"("userId", "priority");

-- CreateIndex
CREATE INDEX "DeviceConnection_userId_idx" ON "DeviceConnection"("userId");

-- CreateIndex
CREATE INDEX "DeviceConnection_isConnected_idx" ON "DeviceConnection"("isConnected");

-- CreateIndex
CREATE UNIQUE INDEX "DeviceConnection_userId_deviceType_deviceId_key" ON "DeviceConnection"("userId", "deviceType", "deviceId");

-- CreateIndex
CREATE INDEX "WellnessSession_userId_startedAt_idx" ON "WellnessSession"("userId", "startedAt");

-- CreateIndex
CREATE INDEX "WellnessSession_sessionType_idx" ON "WellnessSession"("sessionType");

-- CreateIndex
CREATE INDEX "EnvironmentalData_userId_timestamp_idx" ON "EnvironmentalData"("userId", "timestamp");

-- CreateIndex
CREATE INDEX "EnvironmentalData_timestamp_idx" ON "EnvironmentalData"("timestamp");

-- CreateIndex
CREATE INDEX "WellnessGroup_type_idx" ON "WellnessGroup"("type");

-- CreateIndex
CREATE INDEX "WellnessGroup_isPublic_idx" ON "WellnessGroup"("isPublic");

-- CreateIndex
CREATE INDEX "GroupMembership_userId_idx" ON "GroupMembership"("userId");

-- CreateIndex
CREATE INDEX "GroupMembership_groupId_idx" ON "GroupMembership"("groupId");

-- CreateIndex
CREATE UNIQUE INDEX "GroupMembership_userId_groupId_key" ON "GroupMembership"("userId", "groupId");

-- CreateIndex
CREATE INDEX "WorkplaceIntegration_userId_idx" ON "WorkplaceIntegration"("userId");

-- CreateIndex
CREATE INDEX "WorkplaceIntegration_platform_idx" ON "WorkplaceIntegration"("platform");

-- CreateIndex
CREATE UNIQUE INDEX "WorkplaceIntegration_userId_platform_key" ON "WorkplaceIntegration"("userId", "platform");

-- CreateIndex
CREATE INDEX "Class_intensity_idx" ON "Class"("intensity");

-- CreateIndex
CREATE INDEX "JournalEntry_userId_date_idx" ON "JournalEntry"("userId", "date");

-- AddForeignKey
ALTER TABLE "BiometricData" ADD CONSTRAINT "BiometricData_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MoodEntry" ADD CONSTRAINT "MoodEntry_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StressPrediction" ADD CONSTRAINT "StressPrediction_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ChallengeParticipant" ADD CONSTRAINT "ChallengeParticipant_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ChallengeParticipant" ADD CONSTRAINT "ChallengeParticipant_challengeId_fkey" FOREIGN KEY ("challengeId") REFERENCES "WellnessChallenge"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AIRecommendation" ADD CONSTRAINT "AIRecommendation_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DeviceConnection" ADD CONSTRAINT "DeviceConnection_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WellnessSession" ADD CONSTRAINT "WellnessSession_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EnvironmentalData" ADD CONSTRAINT "EnvironmentalData_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GroupMembership" ADD CONSTRAINT "GroupMembership_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GroupMembership" ADD CONSTRAINT "GroupMembership_groupId_fkey" FOREIGN KEY ("groupId") REFERENCES "WellnessGroup"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WorkplaceIntegration" ADD CONSTRAINT "WorkplaceIntegration_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
