import React,{ useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './styles/template1.css';
import html2pdf from 'html2pdf.js';
import { collection, doc, getFirestore, setDoc, getDoc } from 'firebase/firestore';
import { useAuth } from '../hooks/useAuth';


import Call from './assets/call.svg'
import Email from './assets/email.svg';
import Location from './assets/location.svg'
import Web from './assets/world-wide-web.svg'
import LinkedIn from './assets/linkedin.svg'
import SO from './assets/stack-overflow.svg'
import GitHub from './assets/github.svg'
import Twitter from './assets/twitter.svg'
import Medium from './assets/medium.svg'

const SchoolComponent = ({ schools }) => {
    return (
      <>
        {schools.map((school, index) => (
          <div className="schoolInfo" key={index}>
            <p className="school-year">{`${school.SchoolStartYear} - ${school.SchoolEndYear}`}</p>
            <p className="school-name">{school.SchoolName}</p>
            <p className="school-location">{`${school.SchoolCity}, ${school.SchoolCountry}`}</p>
          </div>
        ))}
      </>
    );
  };


  const WorkComponent = ({ work }) => {
    return (
      <>
        {work.map((experience, index) => (
          <div className="work-info" key={index}>
            <p className="work-year">{`${experience.WorkStartYear} - ${experience.WorkEndYear}`}</p>
            <p className="work-role">{experience.WorkJobTitle}</p>
            <p className="company-name">{experience.WorkCompany}</p>
            <p className="company-description">{experience.WorkTaskDnWithTools}</p>
          </div>
        ))}
      </>
    );
  };

  const UniversityComponent = ({ universityData }) => {
    return (
      <>
        {universityData.map((uni, index) => (
          <div className="University-info" key={index}>
            <p className="work-year">{`${uni.UniStartYear} - ${uni.UniEndYear}`}</p>
            <p className="degree">{uni.UniDegree}</p>
            <p className="university">
                    {uni.graduationTransUrl && uni.graduationTransUrl !== '' ? (
                    <a href={uni.graduationTransUrl} className="university" target="_blank" rel="noopener noreferrer">
                    {uni.UniName}
                    </a>
                ) : (
                    <p className="university">{uni.UniName}</p>
                )}
            </p>
            <p className="university-location">{`${uni.UniCity}, ${uni.UniCountry}`}</p>
          </div>
        ))}
      </>
    );
  };

  const ProjectComponent = ({ projects }) => {
    return (
      <>
        {projects.map((project, index) => (
          <div className="project-info" key={index}>
            <p className="work-year">{`${project.ProjStartMonth} ${project.ProjStartYear} - ${project.ProjEndMonth} ${project.ProjEndYear}`}</p>
            <p className="work-role">
                {project.ProjEvidence || project.ProjectEvdUrl ? (
                <a
                    href={project.ProjEvidence ? project.ProjEvidence : project.ProjectEvdUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {project.ProjName}
                </a>
                ) : (
                <span>{project.ProjName}</span>
                )}
            </p>
            <p className="project-location">{project.ProjPlace}</p>
            <p className="project-skills">Skills gained - {project.ProjSkills.join(', ')}</p>
            
          </div>
        ))}
      </>
    );
  };

  const CertificationComponent = ({ certifications }) => {
    return (
      <>
        {certifications.map((certification, index) => (
          <div className="certification-item" key={index}>
            <p className="work-year">{certification.CertificateIssueMonth} {certification.CertificateIssueYear}</p>
            <p className="certification-name">
                {certification.CertificateLInk || certification.CertUrl ? (
                <a
                    href={certification.CertificateLInk ? certification.CertificateLInk : certification.CertUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {certification.CertificateName}
                </a>
                ) : (
                <span>{certification.CertificateName}</span>
                )}
            </p>
            <p className="certification-organization">{certification.CertificateissuedOrg}</p>
            
          </div>
        ))}
      </>
    );
  };

  const AwardsComponent = ({ awards }) => {
    return (
      <div className="awards">
        {awards.map((award, index) => (
          <p className="award-name" key={index}>{award}</p>
        ))}
      </div>
    );
  };

  const PublicationsComponent = ({ publications }) => {
    return (
      <div className="publications">
        {publications.map((publication, index) => (
          <div className="publication-item" key={index}>
            <p className="work-year">{publication.PblMonth} {publication.PblYear}</p>
            <p className="certification-name">
                {publication.PblUrl && (
                <a href={publication.PblUrl} target="_blank" rel="noopener noreferrer">
                    {publication.PblTitle}
                </a>
                )}
            </p>
            <p className="certification-organization">{publication.Publisher}</p>
            
          </div>
        ))}
      </div>
    );
  };

  const ExamResultsComponent = ({ olExamResults, alExamResults }) => {
  // Function to calculate grade counts
  const calculateGradeCounts = (examResults) => {
    const gradeCounts = {
      'A*': 0,
      'A': 0,
      'B': 0,
      'C': 0,
      'D': 0,
      'E': 0,
      'F': 0,
      'S': 0
    };

    examResults.forEach((result) => {
      // Increment the count for the corresponding grade
      gradeCounts[result.result]++;
    });

    return gradeCounts;
  };

  // Calculate grade counts for OL and AL exams
  const olGradeCounts = calculateGradeCounts(olExamResults);
  const alGradeCounts = calculateGradeCounts(alExamResults);

  return (
    <div>
      <h3>OL Examination Results</h3>
      <div className="schoolInfo">
        {Object.entries(olGradeCounts).map(([grade, count]) => (
          // Conditionally render the grade count only if it's greater than zero
          count > 0 && <p key={grade} className="OL-marks">{`${grade}: ${count}`}</p>
        ))}
      </div>

      <h3>AL Examination Results</h3>
      <div className="schoolInfo">
        {Object.entries(alGradeCounts).map(([grade, count]) => (
          // Conditionally render the grade count only if it's greater than zero
          count > 0 && <p key={grade} className="OL-marks">{`${grade}: ${count}`}</p>
        ))}
      </div>
    </div>
  );
};

const ClubsComponent = ({ clubs }) => {
    return (
      <div>
        <div className="societies">
          {clubs.map((club, index) => (
            <div className="societyInfo" key={index}>
              <p className="society-name">{club.ClubName}</p>
              <p className="club-name">Roles Played - </p>
              <ul className="club-role">
                {club.ClubRolesPlayed.map((role, roleIndex) => (
                  <li key={roleIndex}>{role}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const SkillsComponent = ({ softSkills }) => {
    return (
        <div className="skills">
            <ul className="skillItem">
                {softSkills.map((skill, index) => (
                    <li key={index}>{skill}</li>
                ))}
            </ul>
            
        </div>
    );
};

const LanguagesComponent = ({ languages }) => {
    return (
        <div className="languages">
            
            <ul className="languageItem">
                {languages.map((language, index) => (
                    <li key={index}>{language}</li>
                ))}
            </ul>
        </div>
    );
};

const ReferencesComponent = ({ references }) => {
    return (
        <div className="references">
            
            {references.map((reference, index) => (
                <div className="referenceItem" key={index}>
                    <p className="reference-name">{reference.name}</p>
                    <p className="reference-number">{reference.phone}</p>
                </div>
            ))}
        </div>
    );
};

const ResearchInterestsComponent = ({ researchInterests }) => {
    return (
        <div className="research">
            
            <ul className="researchItem">
                {researchInterests.map((interest, index) => (
                    <li key={index}>{interest}</li>
                ))}
            </ul>
        </div>
    );
};

const LinksComponent = ({ socialMediaLinks }) => {
    const getSocialMediaLink = (platform, username) => {
        switch (platform) {
            case 'GitHubUN':
                return `https://github.com/${username}`;
            case 'LinkedInUN':
                return `https://www.linkedin.com/in/${username}`;
            case 'MediumUN':
                return `https://medium.com/@${username}`;
            case 'StackOverUN':
                return `https://stackoverflow.com/users/${username}`;
            case 'TwitterUN':
                return `https://twitter.com/${username}`;
            default:
                return '';
        }
    };

    return (
        <div className="links">
            {Object.entries(socialMediaLinks).map(([platform, username]) => (
                <div className="linkItem" key={platform}>
                    {/* Assuming the images are imported correctly */}
                    <img src={getImageSource(platform)} width="23px" alt={platform} />
                    <p>
                    <a href={getSocialMediaLink(platform, username)} target="_blank" rel="noopener noreferrer">
                        {username}
                    </a>
                    </p>
                </div>
            ))}
        </div>
    );
};

// Function to get the image source based on the platform
const getImageSource = (platform) => {
    switch (platform) {
        case 'GitHubUN':
            return GitHub; // Assuming GitHubImage is imported correctly
        case 'LinkedInUN':
            return LinkedIn; // Assuming LinkedInImage is imported correctly
        case 'MediumUN':
            return Medium; // Assuming MediumImage is imported correctly
        case 'StackOverUN':
            return SO; // Assuming StackOverflowImage is imported correctly
        case 'TwitterUN':
            return Twitter; // Assuming TwitterImage is imported correctly
        default:
            return '';
    }
};

function Template1() {
    const { currentUser } = useAuth();

    const exportToPDF = () => {
        const element = document.getElementById('resume-body');
        const opt = {
            margin:       2,
            filename:     'Janudi_Thirimanna_CV.pdf',
            image:        { type: 'jpeg', quality: 0.98 },
            html2canvas:  { scale: 2 },
            jsPDF:        { unit: 'in', format: 'a4', orientation: 'portrait' }
        };
        html2pdf().from(element).set(opt).save(); // Convert and save as PDF
    };

    const [Proname, setProname] = useState([]);
    const [profilePictureUrl, setprofilePictureUrl] = useState([]);
    const [PJobRoles, setPJobRoles] = useState([]);
    const commaJobs = PJobRoles.join(', ');
    const [finalSummary, setfinalSummary] = useState([]);
    const [phone, setphone] = useState([]);
    const [pemail, setpemail] = useState('');
    const [city, setcity] = useState('');
    const [country, setcountry] = useState('');
    const [portfolioSite, setportfolioSite] = useState('');
    const [schools, setSchools] = useState([]);
    const [work, setWork] = useState([]);
    const [universityData, setUniversityData] = useState([]);
    const [projects, setProjects] = useState([]);
    const [certifications, setCertifications] = useState([]);
    const [awards, setAwards] = useState([]);
    const [publications, setPublications] = useState([]);
    const [olExamResults, setOlExamResults] = useState([]);
    const [alExamResults, setAlExamResults] = useState([]);
    const [clubs, setClubs] = useState([]);
    const [softSkills, setSoftSkills] = useState([]); // State to store soft skills data
    const [languages, setLanguages] = useState([]);
    const [references, setReferences] = useState([]);
    const [researchInterests, setResearchInterests] = useState([]);
    const [socialMediaLinks, setSocialMediaLinks] = useState({});
    

    

    useEffect(() => {
        const fetchSummaryData = async () => {
            try {
                const db = getFirestore();
                const userDocumentRef = doc(db, 'studentdetails', currentUser.email);

                const docSnapshot = await getDoc(userDocumentRef);
                if (docSnapshot.exists()) {
                    const docData = docSnapshot.data();
                    setProname(docData  .Proname || '');
                    setprofilePictureUrl(docData  .profilePictureUrl || '');
                    setPJobRoles(docData.PJobRoles || []);
                    setfinalSummary(docData .finalSummary || '');
                    setphone(docData .phone || '');
                    setpemail(docData.pemail || '');
                    setcity(docData.city || '');
                    setcountry(docData.country || '');
                    setportfolioSite(docData.portfolioSite || '');
                    setSchools(docData.schools);

                    const fetchedSchools = docData.schools || []; // Assuming 'schools' is an array in your Firestore document
                    setSchools(fetchedSchools);

                    const fetchedWork = docData.work || []; // Assume fetched work data
                    setWork(fetchedWork);

                    const fetchedUniversityData = docData.universityData || []; // Assume fetched university data
                    setUniversityData(fetchedUniversityData);

                    const fetchedProjects = docData.projects || []; // Assume fetched project data
                    setProjects(fetchedProjects);

                    const fetchedCertifications = docData.certifications || []; // Assume fetched certification data
                    setCertifications(fetchedCertifications);

                    const fetchedAwards = docData.extraInfo.award || []; // Assume fetched awards data
                    setAwards(fetchedAwards);

                    const fetchedPublications =  docData.publications || []; // Assume fetched publications data
                    setPublications(fetchedPublications);

                    const fetchedOlExamResults = docData.olExamResults ||[]; // Assume fetched OL exam results data
                    const fetchedAlExamResults = docData.alExamResults || []; // Assume fetched AL exam results data
                    setOlExamResults(fetchedOlExamResults);
                    setAlExamResults(fetchedAlExamResults);

                    setClubs(docData.clubs || []);
                    setSoftSkills(docData.skillTrack.SoftSkills || []); // Set the soft skills data into state
                    setLanguages(docData.extraInfo.lang || []);
                    setReferences(docData.extraInfo.refPerson || []);
                    setResearchInterests(docData.extraInfo.ExtraInfoInterests || []);
                    setSocialMediaLinks({
                        GitHubUN: docData.GitHubUN || '',
                        LinkedInUN: docData.LinkedInUN || '',
                        MediumUN: docData.MediumUN || '',
                        StackOverUN: docData.StackOverUN || '',
                        TwitterUN: docData.TwitterUN || ''
                    });
                    
                    
                }
            } catch (error) {
                console.error('Error fetching summary info from Firestore:', error);
            }
        };

        fetchSummaryData();
        
    }, [currentUser.email]);

    

    return (
        <div>
        <div id="resume-body" className="cvbody">
            
            <div className="left-container">

                <h2>{Proname}</h2>
                <p className="job-field">{commaJobs}</p>
                <p className="professional-summary">
                    {finalSummary}
                </p>

                <h3 className="left-topics">Work experience</h3>

                <div>
                    
                    {work.length === 1 ? (
                        <div className="workContainer">
                        <WorkComponent work={work.slice(0, 1)} />
                        </div>
                    ) : work.length >= 2 ? (
                        <div className="workContainer">
                        <WorkComponent work={work.slice(0, 2)} />
                        </div>
                    ) : (
                        <p>No work experience available</p>
                    )}
                </div>

                <h3 className="left-topics" style={{marginTop:'3rem'}}> University Education</h3>

                <div>
      
                    {universityData.length === 1 ? (
                        <div className="universityContainer">
                        <UniversityComponent universityData={universityData.slice(0, 1)} />
                        </div>
                    ) : universityData.length >= 2 ? (
                        <div className="universityContainer">
                        <UniversityComponent universityData={universityData.slice(0, 2)} />
                        </div>
                    ) : (
                        <p>No university information available</p>
                    )}
                </div>

                <h3 className="left-topics">Project Experience</h3>

                <div>
                    
                    {projects.length > 0 ? (
                        <div className="projectContainer">
                        <ProjectComponent projects={projects} />
                        </div>
                    ) : (
                        <p>No project information available</p>
                    )}
                </div>

                <h3 className="left-topics">Licenses And Certifications </h3>
                <div>
                    <div className="certifications">
                        {certifications.length > 0 ? (
                        <CertificationComponent certifications={certifications} />
                        ) : (
                        <p>No certification information available</p>
                        )}
                    </div>
                </div>

                <h3 className="left-topics">Awards</h3>
                <div>
                   
                    {awards.length > 0 ? (
                        <AwardsComponent awards={awards} />
                    ) : (
                        <p>No awards information available</p>
                    )}
                </div>

                <h3 className="left-topics">Publication </h3>
                <div>
                    
                    {publications.length > 0 ? (
                        <PublicationsComponent publications={publications} />
                    ) : (
                        <p>No publications available</p>
                    )}
                </div>
                
            </div>

            <div className="contactPane">
                <div className="section">
                    <div className="profile">
                        <img src={profilePictureUrl} alt="" srcSet="" className="profileImage" />
                    </div>
                    <div className="contactSection">

                        <h3 className="contacth3">CONTACT</h3>
                        <div className="contactDetails">
                            <div className="contactItem">
                                <img src={Call} width="23px" />
                                <p>{phone}</p>
                            </div>
                            <div className="contactItem">
                                <img src={Email} width="18px" />
                                <p style={{ margin: '4px' }}>{pemail}</p>
                            </div>
                            <div className="contactItem">
                                <img src={Location} width="30px" />
                                <p>{city}, {country}</p> 
                            </div>
                            <div className="contactItem">
                                <img src={Web} width="22px" height="28px" />
                                <p style={{ margin: '3px' }}>{portfolioSite} </p>
                            </div>
                        </div>

                        <h3>Links</h3>
                        <div>
                            {/* Other components */}
                            
                            {/* Display the LinksComponent with the fetched social media links data */}
                            <LinksComponent socialMediaLinks={socialMediaLinks} />
                        </div>

                        <h3>School education</h3>
                        <div className="schools">
                            <div>
                                <h2>School Information</h2>
                                {schools.length === 1 ? (
                                    <div className="schoolContainer">
                                    <SchoolComponent schools={schools.slice(0, 1)} />
                                    </div>
                                ) : schools.length >= 2 ? (
                                    <div className="schoolContainer">
                                    <SchoolComponent schools={schools.slice(0, 2)} />
                                    </div>
                                ) : (
                                    <p>No school information available</p>
                                )}
                            </div>
                            <div>
                                <h2>Exam Results</h2>
                                <ExamResultsComponent olExamResults={olExamResults} alExamResults={alExamResults} />
                            </div>
                        </div>

                        <h3 style={{marginTop:'2.8rem'}}>Clubs / Societies</h3>
                        <div>
                            {/* Other components */}

                            {/* Display the ClubsComponent with the fetched club/society data */}
                            <ClubsComponent clubs={clubs} />
                        </div>

                        <div className="skills">
                            <h3>Soft Skills</h3>
                            <div>
                                {/* Other components */}
                                
                                {/* Display the SkillsComponent with the fetched soft skills and key skills data */}
                                <SkillsComponent softSkills={softSkills} />
                            </div>
                        </div>

                        <div className="languages">
                            <h3>Languages</h3>
                            <div>
                                    {/* Other components */}
                                    
                                    {/* Display the LanguagesComponent with the fetched languages data */}
                                    <LanguagesComponent languages={languages} />
                                </div>
                        </div>

                        <div className="references">
                            <h3>References</h3>
                            <div>
                                {/* Other components */}
                                
                                {/* Display the ReferencesComponent with the fetched references data */}
                                <ReferencesComponent references={references} />
                            </div>
                        </div>

                        <div className="research">
                            <h3>Research Interests</h3>
                            <div>
                                {/* Other components */}
                                
                                {/* Display the ResearchInterestsComponent with the fetched research interests data */}
                                <ResearchInterestsComponent researchInterests={researchInterests} />
                            </div>
                        </div>
                    </div>
                    
                </div>
                
            </div>
            
        </div>

        <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <button onClick={exportToPDF}>Export to PDF</button> {/* Button to export PDF */}
        </div>

        </div>
        
    );
}

export default Template1;
