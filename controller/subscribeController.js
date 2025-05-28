const subscribeModel = require('../models/subscribeModel');

const postSubscribe = async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ error: 'Email is required' });
    }

    // Email format validation
    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    if (!isValidEmail) {
      return res.status(400).json({ error: 'Invalid email format' });
    }
    // Check if already subscribed
    const existing = await subscribeModel.findOne({ where: { email } })
    if (existing) {
      return res.status(200).json({ error: 'Email is already subscribed' });
    }

    //Create new subscription
    const newSubscription = await subscribeModel.create({ email })
    if (!newSubscription) {
      return res.status(201).json({ error: 'Not Subscribe' });
    }
    return res.status(201).json({ message: 'Subscribed successfully' });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}


// left search on jobs listing page
const jobsSearch = async (req, res) => {
  try {
    const jobs = [
  {
    id: 1,
    slug: "frontend-developer-techwave",
    company: "TechWave Solutions",
    title: "Frontend Developer",
    category: "Web Development",
    salary: "35000-40000",
    location: "New York, NY",
    postedTime: "2 days ago",
    logo: "images/company_logo_1.png",
  },
  {
    id: 2,
    slug: "graphic-designer-creatix",
    company: "Creatix Studio",
    title: "Graphic Designer",
    category: "Design",
    salary: "30000-35000",
    location: "San Francisco, CA",
    postedTime: "5 days ago",
    logo: "images/company_logo_2.png",
  },
  {
    id: 3,
    slug: "backend-engineer-devhouse",
    company: "DevHouse Inc.",
    title: "Backend Engineer",
    category: "Software Engineering",
    salary: "45000-50000",
    location: "Austin, TX",
    postedTime: "1 day ago",
    logo: "images/company_logo_3.png",
  },
  {
    id: 4,
    slug: "ui-ux-designer-pixelcrew",
    company: "PixelCrew",
    title: "UI/UX Designer",
    category: "Design",
    salary: "38000-42000",
    location: "Remote",
    postedTime: "3 days ago",
    logo: "images/company_logo_4.png",
  },
  {
    id: 5,
    slug: "data-analyst-datasoft",
    company: "DataSoft",
    title: "Data Analyst",
    category: "Data Analytics",
    salary: "40000-45000",
    location: "Chicago, IL",
    postedTime: "Today",
    logo: "images/company_logo_5.png",
  },
  {
    id: 6,
    slug: "data-analyst-datasoft",
    company: "DataSoft",
    title: "Data Analyst",
    category: "Data Analytics",
    salary: "40000-45000",
    location: "Chicago, IL",
    postedTime: "Today",
    logo: "images/company_logo_5.png",
  },
  {
    id: 7,
    slug: "data-analyst-datasoft",
    company: "DataSoft",
    title: "Data Analyst",
    category: "Data Analytics",
    salary: "40000-45000",
    location: "Chicago, IL",
    postedTime: "Today",
    logo: "images/company_logo_5.png",
  },
  {
    id: 8,
    slug: "data-analyst-datasoft",
    company: "DataSoft",
    title: "Data Analyst",
    category: "Data Analytics",
    salary: "40000-45000",
    location: "Chicago, IL",
    postedTime: "Today",
    logo: "images/company_logo_5.png",
  },
  {
    id: 9,
    slug: "data-analyst-datasoft",
    company: "DataSoft",
    title: "Data Analyst",
    category: "Data Analytics",
    salary: "40000-45000",
    location: "Chicago, IL",
    postedTime: "Today",
    logo: "images/company_logo_5.png",
  },
  {
    id: 10,
    slug: "data-analyst-datasoft",
    company: "DataSoft",
    title: "Data Analyst",
    category: "Data Analytics",
    salary: "40000-45000",
    location: "Chicago, IL",
    postedTime: "Today",
    logo: "images/company_logo_5.png",
  },
  {
    id: 11,
    slug: "data-analyst-datasoft",
    company: "DataSoft",
    title: "Data Analyst",
    category: "Data Analytics",
    salary: "40000-45000",
    location: "Chicago, IL",
    postedTime: "Today",
    logo: "images/company_logo_5.png",
  },
  {
    id: 12,
    slug: "data-analyst-datasoft",
    company: "DataSoft",
    title: "Data Analyst",
    category: "Data Analytics",
    salary: "40000-45000",
    location: "Chicago, IL",
    postedTime: "Today",
    logo: "images/company_logo_5.png",
  }
];

    return res.status(200).json({ jobs });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

module.exports = { postSubscribe, jobsSearch };