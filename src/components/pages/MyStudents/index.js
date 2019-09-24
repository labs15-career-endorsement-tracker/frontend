import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { fetchPinnedStudents } from "../../../actions"
import { Link } from "react-router-dom"
import { PinnedStudentCard } from "../../lib"
import ProfileCard from "../../lib/ProfileCard"
import "./index.scss"
import FindStudent from "../../pages/FindStudent"

const MyStudents = () => {
  const pinnedStudents = useSelector(
    state => state.studentReducer.pinnedStudents
  )

  const reqs = [
    {
      id: 1,
      tracks_id: 1,
      tasks_id: 1,
      title: "Update Resume",
      is_required: true,
      tasks_description:
        "Update your resume to include your recent work history",
      is_endorsement_requirement: true,
      progress: 67,
      resources: [
        {
          id: 1,
          type: "unspecified",
          title: "Creddle",
          url: "http://creddle.io/",
          description: null,
          tasks_id: 1
        },
        {
          id: 2,
          type: "unspecified",
          title: "NovoResume",
          url: "https://novoresume.com/resume-templates",
          description: null,
          tasks_id: 1
        },
        {
          id: 3,
          type: "unspecified",
          title: "CV Compiler",
          url: "https://cvcompiler.com/students/lambda",
          description: null,
          tasks_id: 1
        },
        {
          id: 4,
          type: "google_doc",
          title: "Action verbs for technical resumes",
          url:
            "https://docs.google.com/document/d/1wZkDPBWtQZDGGdvStD61iRx_jOWVlIyyQl9UOYHtZgA/edit?usp=sharing",
          description: null,
          tasks_id: 1
        },
        {
          id: 5,
          type: "unspecified",
          title: "Power statements article",
          url:
            "https://www.linkedin.com/pulse/20140929001534-24454816-my-personal-formula-for-a-better-resume/",
          description: null,
          tasks_id: 1
        },
        {
          id: 6,
          type: "google_doc",
          title: "'Lambda is…' paragraphs",
          url:
            "https://docs.google.com/document/d/19OxIgJYkLMq4c1o5zHu1Na4a3PYcyutOosVfg6a03RI/edit?usp=sharing",
          description: null,
          tasks_id: 1
        },
        {
          id: 7,
          type: "google_doc",
          title: "Resume Deep Dive",
          url:
            "https://docs.google.com/document/d/1BOwmlkiPJH_96dnjI3nAW8ok-BOR8hkl5Us70bwf24U/edit?usp=sharing",
          description: null,
          tasks_id: 1
        },
        {
          id: 8,
          type: "unspecified",
          title: "Resume Rubric",
          url:
            "https://drive.google.com/file/d/1h0CCENtwDuNxVwqIG8-P6O2sZj8S4BPg/view?usp=sharing",
          description: null,
          tasks_id: 1
        },
        {
          id: 9,
          type: "google_doc",
          title: "Resume tips for UX Designers",
          url:
            "https://docs.google.com/document/d/1yHAw9CbXjmA5TJwI8j84uS-w5tojC8y7eeoGmmoYzMc/edit?usp=sharing",
          description: null,
          tasks_id: 1
        },
        {
          id: 10,
          type: "google_doc",
          title: "Resume tips for Mobile Developers",
          url:
            "https://docs.google.com/document/d/1bvqn0aFGpvkaKVfmBDAhtmoWlAlDoRTD5DuiMXwsJlQ/edit?usp=sharing",
          description: null,
          tasks_id: 1
        },
        {
          id: 11,
          type: "google_doc",
          title: "Resume tips for Web Developers",
          url:
            "https://docs.google.com/document/d/1RHpYdEqrvSPL3Z4dIHLVaYyju06aGrApBI6RMyAqFg0/edit?usp=sharing",
          description: null,
          tasks_id: 1
        },
        {
          id: 12,
          type: "google_doc",
          title: "Resume tips for Data Scientists",
          url:
            "https://docs.google.com/document/d/1bYAuFyZfa-BIAYUf529Px3ULNOKZwAvUFRxDqlOCvaE/edit?usp=sharing",
          description: null,
          tasks_id: 1
        }
      ]
    },
    {
      id: 2,
      tracks_id: 1,
      tasks_id: 2,
      title: "LinkedIn Profile",
      is_required: true,
      tasks_description:
        "You must have an updated LinkedIn profile including a clear headshot and cover photo, personal summary. Reference your portfolio site here, work experiences, with descriptions (only include Lambda under work if you were a PM), projects.",
      is_endorsement_requirement: true,
      progress: 75,
      resources: [
        {
          id: 13,
          type: "unspecified",
          title: "LinkedIn Rubric",
          url:
            "https://drive.google.com/file/d/1fgBBDBSoZwCB8exoRSFy20MpGZxNd6zq/view?usp=sharing",
          description: null,
          tasks_id: 2
        },
        {
          id: 14,
          type: "google_doc",
          title: "LinkedIn Deep Dive",
          url:
            "https://docs.google.com/document/d/1Gp4ZjEwRUY2a1dcbXK0Ml5LE4ZzWRnUjHa9pJnNFIpo/edit?usp=sharing",
          description: null,
          tasks_id: 2
        }
      ]
    },
    {
      id: 3,
      tracks_id: 1,
      tasks_id: 3,
      title: "Green GitHub with quality contributions",
      is_required: true,
      tasks_description:
        "You should have quality contributions in your git hub with your top projects pinned and a clear headshot",
      is_endorsement_requirement: true,
      progress: 50,
      resources: [
        {
          id: 15,
          type: "unspecified",
          title: "TroubleShoot GitHub Contributions Not Showing",
          url:
            "https://help.github.com/en/articles/why-are-my-contributions-not-showing-up-on-my-profile",
          description: null,
          tasks_id: 3
        },
        {
          id: 16,
          type: "unspecified",
          title: "GitHub Rubric",
          url:
            "https://drive.google.com/file/d/1ar_sdfp78CjBJLw1ru4HlYdZbobZFiks/view?usp=sharing",
          description: null,
          tasks_id: 3
        }
      ]
    },
    {
      id: 4,
      tracks_id: 1,
      tasks_id: 4,
      title: "Portfolio Website: Web Dev",
      is_required: true,
      tasks_description:
        "You must have an original portfolio, built without using templates from drag and drop website builders like wix",
      is_endorsement_requirement: true,
      progress: 75,
      resources: [
        {
          id: 17,
          type: "unspecified",
          title: "Request Your Free Domain Name",
          url: "https://forms.gle/mUrc1mTt33pnvTiNA",
          description: null,
          tasks_id: 4
        },
        {
          id: 18,
          type: "unspecified",
          title: "Building Your Portfolio: MVP",
          url: "https://github.com/LambdaSchool/portfolio-website",
          description: null,
          tasks_id: 4
        },
        {
          id: 19,
          type: "unspecified",
          title: "Web Design Resources",
          url:
            "https://gist.github.com/justsml/badccebfb44fd20dae39b49a2e29085b#web-design-resources",
          description: null,
          tasks_id: 4
        },
        {
          id: 20,
          type: "unspecified",
          title: "Portfolio Rubric",
          url:
            "https://drive.google.com/file/d/1On275nNm5St9sF9a4w3Tkv-k6YmXKb9F/view?usp=sharing",
          description: null,
          tasks_id: 4
        }
      ]
    },
    {
      id: 10,
      tracks_id: 1,
      tasks_id: 10,
      title: "Mock Interviews",
      is_required: true,
      tasks_description:
        "Pass one SkilledInc. interview and completed three Pramp interviews",
      is_endorsement_requirement: true,
      progress: 100,
      resources: [
        {
          id: 30,
          type: "unspecified",
          title: "Pramp",
          url: "https://www.pramp.com/#/",
          description: null,
          tasks_id: 10
        },
        {
          id: 31,
          type: "google_doc",
          title: "Technical Interview Prep Packet",
          url:
            "https://https://docs.google.com/document/d/1g9BkZOc2YSyYsa2q-qblXsXcvvU_xteuRt7IxTybAVU/edit?usp=sharingwww.pramp.com/#/",
          description: null,
          tasks_id: 10
        },
        {
          id: 32,
          type: "google_doc",
          title: "STAR and common interview questions worksheet",
          url:
            "https://docs.google.com/document/d/12dqHqzFTSuHxADm0E_vxMQWqyYVKJyPLuvsM7lnHdYg/edit?usp=sharing",
          description: null,
          tasks_id: 10
        }
      ]
    }
  ]
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchPinnedStudents())
  }, [dispatch])
  return (
    <>
      <FindStudent />
      <section className="my-pinned-students">
        {pinnedStudents.map(student => (
          <Link to={`/student/${student.id}`}>
            <ProfileCard
              student={student}
              key={student.id}
              requirements={reqs}
              showFull={"false"}
            />
          </Link>
        ))}
      </section>
    </>
  )
}

export default MyStudents
