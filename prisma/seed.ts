import { PrismaClient, Prisma } from "../app/generated/prisma";

const prisma = new PrismaClient();

const classData: Prisma.ClassCreateInput[] = [
    {
        title: "Yoga Basics",
        description: "Learn the fundamentals of yoga to improve flexibility and balance",
        startTime: new Date(new Date().setHours(10, 0, 0, 0)),
        instructor: "Sarah Johnson",
        capacity: 15,
    },
    {
        title: "Advanced Meditation",
        description: "Deep dive into advanced meditation techniques for inner peace",
        startTime: new Date(new Date().setHours(14, 30, 0, 0)),
        instructor: "Michael Chen",
        capacity: 12,
    },
    {
        title: "Mindfulness for Beginners",
        description: "Introduction to mindfulness practices for daily stress relief",
        startTime: new Date(new Date().setHours(9, 0, 0, 0)),
        instructor: "Emma Rodriguez",
        capacity: 20,
    },
    {
        title: "Power Yoga Flow",
        description: "Dynamic vinyasa flow to build strength and endurance",
        startTime: new Date(new Date().setHours(16, 0, 0, 0)),
        instructor: "David Thompson",
        capacity: 18,
    },
    {
        title: "Restorative Yoga",
        description: "Gentle poses and deep relaxation for healing and recovery",
        startTime: new Date(new Date().setHours(19, 0, 0, 0)),
        instructor: "Lisa Park",
        capacity: 10,
    },
    {
        title: "Breathing Techniques Workshop",
        description: "Master various breathing techniques for better health and focus",
        startTime: new Date(new Date().setHours(11, 30, 0, 0)),
        instructor: "Alex Morgan",
        capacity: 25,
    },
    {
        title: "Ashtanga Primary Series",
        description: "Traditional Ashtanga yoga sequence for strength and flexibility",
        startTime: new Date(new Date().setHours(6, 0, 0, 0)),
        instructor: "Priya Patel",
        capacity: 15,
    },
    {
        title: "Yin Yoga Deep Stretch",
        description: "Long-held poses targeting deep connective tissues and fascia",
        startTime: new Date(new Date().setHours(20, 0, 0, 0)),
        instructor: "Carlos Mendez",
        capacity: 12,
    },
    {
        title: "Kundalini Awakening",
        description: "Advanced energy work and spiritual awakening practices",
        startTime: new Date(new Date().setHours(5, 30, 0, 0)),
        instructor: "Guru Singh",
        capacity: 8,
    },
    {
        title: "Vipassana Meditation Intensive",
        description: "Insight meditation for deep self-awareness and transformation",
        startTime: new Date(new Date().setHours(7, 0, 0, 0)),
        instructor: "Dharma Master Lin",
        capacity: 20,
    },
    {
        title: "Pilates Reformer Advanced",
        description: "Advanced Pilates on reformer machines for core strength",
        startTime: new Date(new Date().setHours(17, 30, 0, 0)),
        instructor: "Maria Santos",
        capacity: 6,
    },
    {
        title: "Barre Fitness Fusion",
        description: "Ballet-inspired workout combining strength and cardio",
        startTime: new Date(new Date().setHours(18, 0, 0, 0)),
        instructor: "Isabella Rossi",
        capacity: 16,
    },
    {
        title: "Tai Chi for Health",
        description: "Ancient Chinese martial art for balance and inner peace",
        startTime: new Date(new Date().setHours(8, 0, 0, 0)),
        instructor: "Master Wei Zhang",
        capacity: 18,
    },
    {
        title: "Qigong Energy Flow",
        description: "Traditional Chinese energy cultivation and healing",
        startTime: new Date(new Date().setHours(6, 30, 0, 0)),
        instructor: "Li Wei",
        capacity: 14,
    },
    {
        title: "Sound Healing Bath",
        description: "Therapeutic sound frequencies for deep relaxation and healing",
        startTime: new Date(new Date().setHours(21, 0, 0, 0)),
        instructor: "Crystal Harmony",
        capacity: 10,
    },
    {
        title: "Chakra Balancing Workshop",
        description: "Energy work to align and balance your seven chakras",
        startTime: new Date(new Date().setHours(15, 0, 0, 0)),
        instructor: "Raven Moon",
        capacity: 12,
    },
    {
        title: "Hot Yoga Bikram",
        description: "Traditional 26-posture sequence in heated room",
        startTime: new Date(new Date().setHours(17, 0, 0, 0)),
        instructor: "Bikram Singh",
        capacity: 25,
    },
    {
        title: "Aerial Yoga Fundamentals",
        description: "Yoga poses using silk hammocks for support and inversion",
        startTime: new Date(new Date().setHours(19, 30, 0, 0)),
        instructor: "Skye Johnson",
        capacity: 8,
    },
    {
        title: "Prenatal Yoga & Wellness",
        description: "Specialized yoga for expectant mothers and pregnancy support",
        startTime: new Date(new Date().setHours(10, 30, 0, 0)),
        instructor: "Dr. Maya Williams",
        capacity: 12,
    },
    {
        title: "Senior Gentle Yoga",
        description: "Adapted yoga for seniors focusing on mobility and balance",
        startTime: new Date(new Date().setHours(11, 0, 0, 0)),
        instructor: "Grace Anderson",
        capacity: 15,
    },
    {
        title: "Kids Yoga & Mindfulness",
        description: "Fun yoga and mindfulness activities for children ages 5-12",
        startTime: new Date(new Date().setHours(16, 30, 0, 0)),
        instructor: "Joy Martinez",
        capacity: 20,
    },
    {
        title: "Trauma-Informed Yoga",
        description: "Gentle yoga practices designed for trauma survivors",
        startTime: new Date(new Date().setHours(14, 0, 0, 0)),
        instructor: "Dr. Sarah Mitchell",
        capacity: 10,
    },
    {
        title: "Yoga for Athletes",
        description: "Performance-enhancing yoga for sports and athletic training",
        startTime: new Date(new Date().setHours(7, 30, 0, 0)),
        instructor: "Coach Mike Reynolds",
        capacity: 18,
    },
    {
        title: "Meditation for Anxiety Relief",
        description: "Specific techniques to manage anxiety and find calm",
        startTime: new Date(new Date().setHours(13, 0, 0, 0)),
        instructor: "Dr. James Chen",
        capacity: 16,
    },
    {
        title: "Loving-Kindness Meditation",
        description: "Cultivate compassion and love for self and others",
        startTime: new Date(new Date().setHours(20, 30, 0, 0)),
        instructor: "Buddhist Monk Tenzin",
        capacity: 14,
    },
    {
        title: "Transcendental Meditation",
        description: "Advanced mantra-based meditation for deep consciousness",
        startTime: new Date(new Date().setHours(6, 0, 0, 0)),
        instructor: "Maharishi Deepak",
        capacity: 12,
    },
    {
        title: "Mindful Movement & Dance",
        description: "Expressive movement combining dance and mindfulness",
        startTime: new Date(new Date().setHours(18, 30, 0, 0)),
        instructor: "Sofia Rodriguez",
        capacity: 20,
    },
    {
        title: "Forest Bathing & Nature Meditation",
        description: "Outdoor meditation connecting with nature's healing energy",
        startTime: new Date(new Date().setHours(8, 30, 0, 0)),
        instructor: "Eco Guide Maya",
        capacity: 15,
    },
    {
        title: "Crystal Healing Workshop",
        description: "Learn to work with crystals for healing and energy balance",
        startTime: new Date(new Date().setHours(16, 0, 0, 0)),
        instructor: "Gemma Stone",
        capacity: 12,
    },
    {
        title: "Ayurvedic Wellness Consultation",
        description: "Personalized wellness plans based on Ayurvedic principles",
        startTime: new Date(new Date().setHours(12, 0, 0, 0)),
        instructor: "Dr. Anjali Sharma",
        capacity: 6,
    },
    {
        title: "Reiki Level 1 Certification",
        description: "Learn the fundamentals of energy healing and Reiki practice",
        startTime: new Date(new Date().setHours(9, 30, 0, 0)),
        instructor: "Reiki Master Karen",
        capacity: 8,
    },
    {
        title: "Mindful Eating Workshop",
        description: "Develop a healthy relationship with food through mindfulness",
        startTime: new Date(new Date().setHours(17, 0, 0, 0)),
        instructor: "Nutritionist Lisa Chen",
        capacity: 14,
    },
    {
        title: "Sleep Optimization Class",
        description: "Techniques and practices for better sleep quality",
        startTime: new Date(new Date().setHours(21, 30, 0, 0)),
        instructor: "Sleep Specialist Dr. Robert",
        capacity: 18,
    },
    {
        title: "Stress Management Bootcamp",
        description: "Intensive workshop on managing stress and building resilience",
        startTime: new Date(new Date().setHours(15, 30, 0, 0)),
        instructor: "Stress Coach Amanda",
        capacity: 16,
    },
    {
        title: "Emotional Intelligence Workshop",
        description: "Develop emotional awareness and interpersonal skills",
        startTime: new Date(new Date().setHours(13, 30, 0, 0)),
        instructor: "Psychologist Dr. Elena",
        capacity: 12,
    },
    {
        title: "Mindful Leadership Training",
        description: "Leadership skills enhanced through mindfulness practices",
        startTime: new Date(new Date().setHours(10, 0, 0, 0)),
        instructor: "Executive Coach Mark",
        capacity: 10,
    },
    {
        title: "Digital Detox & Mindfulness",
        description: "Break free from technology addiction and find inner peace",
        startTime: new Date(new Date().setHours(19, 0, 0, 0)),
        instructor: "Digital Wellness Expert Zoe",
        capacity: 15,
    },
    {
        title: "Gratitude & Joy Practice",
        description: "Cultivate gratitude and joy through mindful practices",
        startTime: new Date(new Date().setHours(20, 0, 0, 0)),
        instructor: "Happiness Coach Joy",
        capacity: 20,
    },
    {
        title: "Mindful Parenting Workshop",
        description: "Parenting strategies infused with mindfulness and compassion",
        startTime: new Date(new Date().setHours(11, 30, 0, 0)),
        instructor: "Parenting Expert Dr. Maria",
        capacity: 14,
    },
    {
        title: "End-of-Life Care & Mindfulness",
        description: "Compassionate care practices for end-of-life situations",
        startTime: new Date(new Date().setHours(14, 0, 0, 0)),
        instructor: "Hospice Nurse Sarah",
        capacity: 8,
    },
    {
        title: "Mindful Creativity & Art",
        description: "Unlock creativity through mindfulness and artistic expression",
        startTime: new Date(new Date().setHours(16, 30, 0, 0)),
        instructor: "Art Therapist Jessica",
        capacity: 12,
    },
    {
        title: "Sacred Geometry & Meditation",
        description: "Explore consciousness through sacred geometry patterns",
        startTime: new Date(new Date().setHours(17, 30, 0, 0)),
        instructor: "Geometric Mystic Alex",
        capacity: 10,
    },
    {
        title: "Shamanic Journeying",
        description: "Traditional shamanic practices for spiritual exploration",
        startTime: new Date(new Date().setHours(22, 0, 0, 0)),
        instructor: "Shaman White Wolf",
        capacity: 6,
    },
    {
        title: "Tantra & Sacred Sexuality",
        description: "Sacred sexuality practices for deeper connection and intimacy",
        startTime: new Date(new Date().setHours(21, 0, 0, 0)),
        instructor: "Tantra Master Shiva",
        capacity: 8,
    },
    {
        title: "Past Life Regression Therapy",
        description: "Explore past lives for healing and spiritual growth",
        startTime: new Date(new Date().setHours(15, 0, 0, 0)),
        instructor: "Regression Therapist Dr. Linda",
        capacity: 4,
    },
    {
        title: "Astral Projection Workshop",
        description: "Learn conscious out-of-body experiences and astral travel",
        startTime: new Date(new Date().setHours(23, 0, 0, 0)),
        instructor: "Astral Traveler Phoenix",
        capacity: 6,
    },
    {
        title: "Crystal Grid Activation",
        description: "Create and activate crystal grids for manifestation",
        startTime: new Date(new Date().setHours(18, 0, 0, 0)),
        instructor: "Crystal Master Aurora",
        capacity: 10,
    },
    {
        title: "Moon Ritual & Manifestation",
        description: "Harness lunar energy for manifestation and spiritual growth",
        startTime: new Date(new Date().setHours(20, 0, 0, 0)),
        instructor: "Moon Priestess Luna",
        capacity: 12,
    },
    {
        title: "Energy Vampire Protection",
        description: "Learn to protect yourself from energy drains and negativity",
        startTime: new Date(new Date().setHours(19, 30, 0, 0)),
        instructor: "Energy Shield Master Kai",
        capacity: 14,
    },
    {
        title: "Third Eye Activation",
        description: "Awaken your third eye and develop psychic abilities",
        startTime: new Date(new Date().setHours(22, 30, 0, 0)),
        instructor: "Psychic Development Guru",
        capacity: 8,
    },
    {
        title: "Kundalini Rising Intensive",
        description: "Advanced kundalini awakening and energy work",
        startTime: new Date(new Date().setHours(5, 0, 0, 0)),
        instructor: "Kundalini Master Yogi",
        capacity: 6,
    },
    {
        title: "Soul Retrieval Ceremony",
        description: "Shamanic soul retrieval for healing and wholeness",
        startTime: new Date(new Date().setHours(21, 0, 0, 0)),
        instructor: "Soul Retrieval Shaman",
        capacity: 4,
    },
    {
        title: "Light Language Activation",
        description: "Learn to speak and channel light language for healing",
        startTime: new Date(new Date().setHours(20, 30, 0, 0)),
        instructor: "Light Language Channel",
        capacity: 8,
    },
    {
        title: "DNA Activation & Ascension",
        description: "Activate dormant DNA and accelerate spiritual evolution",
        startTime: new Date(new Date().setHours(6, 30, 0, 0)),
        instructor: "DNA Activation Master",
        capacity: 10,
    },
    {
        title: "Mer-Ka-Ba Activation",
        description: "Sacred geometry vehicle for consciousness expansion",
        startTime: new Date(new Date().setHours(7, 30, 0, 0)),
        instructor: "Mer-Ka-Ba Master",
        capacity: 6,
    },
    {
        title: "Starseed Awakening",
        description: "For starseeds to remember their cosmic origins and mission",
        startTime: new Date(new Date().setHours(8, 0, 0, 0)),
        instructor: "Starseed Guide Nova",
        capacity: 12,
    },
    {
        title: "Galactic Council Connection",
        description: "Connect with your galactic family and higher guidance",
        startTime: new Date(new Date().setHours(9, 0, 0, 0)),
        instructor: "Galactic Channeler Star",
        capacity: 8,
    },
    {
        title: "Timeline Jumping Workshop",
        description: "Learn to shift between parallel timelines and realities",
        startTime: new Date(new Date().setHours(10, 30, 0, 0)),
        instructor: "Timeline Navigator Quantum",
        capacity: 6,
    },
    {
        title: "Consciousness Download",
        description: "Receive higher consciousness downloads and upgrades",
        startTime: new Date(new Date().setHours(11, 0, 0, 0)),
        instructor: "Consciousness Channeler",
        capacity: 10,
    },
    {
        title: "5D Ascension Preparation",
        description: "Prepare for the shift to 5D consciousness and reality",
        startTime: new Date(new Date().setHours(12, 0, 0, 0)),
        instructor: "5D Ascension Guide",
        capacity: 15,
    },
    {
        title: "Interdimensional Travel",
        description: "Learn to travel between dimensions and realities",
        startTime: new Date(new Date().setHours(13, 0, 0, 0)),
        instructor: "Dimension Walker",
        capacity: 4,
    },
    {
        title: "Cosmic Light Body Activation",
        description: "Activate your light body for higher dimensional existence",
        startTime: new Date(new Date().setHours(14, 0, 0, 0)),
        instructor: "Light Body Master",
        capacity: 8,
    },
    {
        title: "Universal Love Frequency",
        description: "Tune into the universal love frequency for healing",
        startTime: new Date(new Date().setHours(15, 0, 0, 0)),
        instructor: "Love Frequency Channeler",
        capacity: 12,
    },
    {
        title: "Divine Feminine Awakening",
        description: "Awaken and embody the divine feminine energy",
        startTime: new Date(new Date().setHours(16, 0, 0, 0)),
        instructor: "Divine Feminine Priestess",
        capacity: 14,
    },
    {
        title: "Sacred Masculine Integration",
        description: "Integrate and balance sacred masculine energy",
        startTime: new Date(new Date().setHours(17, 0, 0, 0)),
        instructor: "Sacred Masculine Guide",
        capacity: 12,
    },
    {
        title: "Twin Flame Reunion",
        description: "Prepare for and navigate twin flame connections",
        startTime: new Date(new Date().setHours(18, 0, 0, 0)),
        instructor: "Twin Flame Specialist",
        capacity: 10,
    },
    {
        title: "Soul Contract Review",
        description: "Review and renegotiate your soul contracts",
        startTime: new Date(new Date().setHours(19, 0, 0, 0)),
        instructor: "Soul Contract Reader",
        capacity: 6,
    },
    {
        title: "Akashic Records Access",
        description: "Learn to access your akashic records for guidance",
        startTime: new Date(new Date().setHours(20, 0, 0, 0)),
        instructor: "Akashic Records Reader",
        capacity: 8,
    },
    {
        title: "Divine Blueprint Activation",
        description: "Activate your divine blueprint and life purpose",
        startTime: new Date(new Date().setHours(21, 0, 0, 0)),
        instructor: "Divine Blueprint Activator",
        capacity: 10,
    },
    {
        title: "Cosmic Consciousness Expansion",
        description: "Expand your consciousness to cosmic levels",
        startTime: new Date(new Date().setHours(22, 0, 0, 0)),
        instructor: "Cosmic Consciousness Guide",
        capacity: 6,
    },
    {
        title: "Infinite Love & Light Transmission",
        description: "Receive infinite love and light energy transmissions",
        startTime: new Date(new Date().setHours(23, 0, 0, 0)),
        instructor: "Infinite Love Channeler",
        capacity: 12,
    },
];  

const userData: Prisma.UserCreateInput[] =[
    {
        name: "John Doe",
        email: "john.doe@example.com",
        image: "https://github.com/shadcn.png",
        emailVerified: true,
        createdAt: new Date(),
        updatedAt: new Date(),
    },
    {
        name: "Jane Doe",
        email: "jane.doe@example.com",
        image: "https://github.com/shadcn.png",
        emailVerified: true,
        createdAt: new Date(),
        updatedAt: new Date(),
    },
    {
        name: "John Smith",
        email: "john.smith@example.com",
        image: "https://github.com/shadcn.png",
        emailVerified: true,
        createdAt: new Date(),
        updatedAt: new Date(),
    },
    {
        name: "Jane Smith",
        email: "jane.smith@example.com",
        image: "https://github.com/shadcn.png",
        emailVerified: true,
        createdAt: new Date(),
        updatedAt: new Date(),
    },
];

export async function main() {
    console.log('🌱 Starting database seeding...');
    
    console.log('👥 Seeding users...');
    for (const u of userData) {
        const user = await prisma.user.create({
            data: u 
        });
        console.log(`✅ Created user: ${user.name} (${user.email})`);
    }
    console.log(`🎉 Successfully seeded ${userData.length} users`);
    
    console.log('🏫 Seeding classes...');
    for (const c of classData) {
        const classItem = await prisma.class.create({
            data: c 
        });
        console.log(`✅ Created class: ${classItem.title}`);
    }
    console.log(`🎉 Successfully seeded ${classData.length} classes`);
    
    console.log('✨ Database seeding completed successfully!');
}

main()
    .then(async () => {
        await prisma.$disconnect();
        console.log('🔌 Database connection closed');
    })
    .catch(async (e) => {
        console.error('❌ Error during seeding:', e);
        await prisma.$disconnect();
        process.exit(1);
    }); 