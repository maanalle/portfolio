# Portfolio Update Instructions

## How to Update Your Portfolio with Your CV Information

I've prepared your portfolio with placeholder data that you can easily customize with your actual CV information. Here's what you need to do:

### 1. **Personal Information** (`profileData` object)
Update the following fields in `src/Portfolio.js`:

```javascript
const profileData = {
  name: "Maatiman", // ✅ Already updated
  title: "Your Actual Job Title", // e.g., "Software Engineer", "Full Stack Developer"
  email: "your.actual.email@domain.com",
  phone: "Your actual phone number",
  location: "Your City, Country",
  linkedin: "https://linkedin.com/in/your-actual-profile",
  github: "https://github.com/your-actual-username",
  about: "Your actual professional summary from CV",
  cvUrl: "/api/download/cv" // Keep this for now
};
```

### 2. **Work Experience** (`experience` array)
Replace the placeholder experience with your actual work history:

```javascript
const experience = [
  {
    id: 1,
    position: "Your Actual Job Title",
    company: "Your Actual Company Name",
    period: "Start Date - End Date",
    location: "City, Country",
    description: [
      "Your actual achievement 1",
      "Your actual achievement 2",
      "Your actual achievement 3"
    ]
  },
  // Add more jobs as needed
];
```

### 3. **Education** (`education` array)
Update with your actual educational background:

```javascript
const education = [
  {
    id: 1,
    degree: "Your Actual Degree",
    institution: "Your University/Institution",
    period: "Start Year - End Year",
    description: "Your specialization, GPA, honors, etc."
  },
  // Add more education entries as needed
];
```

### 4. **Projects** (`projects` array)
Replace with your actual projects:

```javascript
const projects = [
  {
    id: 1,
    title: "Your Actual Project Name",
    description: "What your project does and accomplishes",
    technologies: ["React", "Node.js", "MongoDB"], // Your actual tech stack
    githubUrl: "https://github.com/username/project",
    liveUrl: "https://yourproject.com", // If available
    reportUrl: "/api/reports/project-report.pdf", // Update if you have reports
    highlights: [
      "Key feature or achievement 1",
      "Key feature or achievement 2",
      "Key feature or achievement 3"
    ]
  },
  // Add more projects as needed
];
```

### 5. **Certifications** (`certifications` array)
Update with your actual certifications:

```javascript
const certifications = [
  {
    id: 1,
    name: "Your Actual Certification Name",
    issuer: "Certification Issuer",
    date: "Year",
    credentialUrl: "Verification URL"
  },
  // Add more certifications as needed
];
```

### 6. **Skills** (`skills` object)
Update with your actual skills organized by category:

```javascript
const skills = {
  "Frontend": ["Your actual frontend skills"],
  "Backend": ["Your actual backend skills"],
  "Database": ["Your actual database skills"],
  "DevOps": ["Your actual DevOps skills"],
  "Tools": ["Your actual tools"]
};
```

## Quick Steps to Update:

1. **Open** `src/Portfolio.js` in your code editor
2. **Find** the data objects (around line 30-120)
3. **Replace** the placeholder text with your actual information
4. **Save** the file
5. **View** your updated portfolio in the browser

## What's Already Done:

✅ **Name**: Updated to "Maatiman"  
✅ **Color Scheme**: Beautiful white and blue gradients  
✅ **Layout**: Professional portfolio structure  
✅ **Responsive Design**: Works on all devices  
✅ **Smooth Animations**: Professional transitions  

## After Updating:

Your portfolio will automatically reflect all your changes and display your actual professional information with the beautiful white and blue gradient design!

## Need Help?

If you need assistance updating specific sections or have questions about the structure, feel free to ask!
