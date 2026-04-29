import anupImg from './profile_imgs/Anup.jpg'
import danielaImg from './profile_imgs/Daniala.jpg'
import kaungImg from './profile_imgs/Kaung.png'
import maciejImg from './profile_imgs/Maciej_Wielgosz.jpg'
import minImg from './profile_imgs/Min.jpg'
import mustafaSakhaiImg from './profile_imgs/Mustafa-1.png'
import mustafaBalimazImg from './profile_imgs/Mustafa_Balimaz.jpg'
import wojciechImg from './profile_imgs/Wojciech_Górny.jpg'
import waiYanPaingImg from './profile_imgs/wai_yan_paing.jpg'

const teamMembers = [
  {
    name: 'Mustafa Sakhai',
    country: 'Poland',
    role: 'Founder & CEO',
    roleColor: 'gold',
    description: [
      'Head of Business Development',
      'PhD researcher in Autonomous systems',
      'Lecturer, AGH University of Krakow',
      'CCIE Security',
    ],
    image: mustafaSakhaiImg,
  },
  {
    name: 'Daniela Magellan Ramirez',
    country: 'Mexico',
    role: 'Head of Engineering',
    roleColor: 'cyan',
    description: [
      'Cisco Certified Network Professional (CCNP)',
    ],
    image: danielaImg,
  },
  {
    name: 'Anup Raveen Jaison',
    country: 'India',
    role: 'Business Strategy',
    roleColor: 'amber',
    description: [
      'Head of Business Operations',
      'MBA, IE Business School, Spain',
      'Cisco Certified DevNet Associate',
    ],
    image: anupImg,
  },
  {
    name: 'Wojciech Górny',
    country: 'Poland',
    role: 'Cybersecurity',
    roleColor: 'green',
    description: [
      'Cybersecurity Specialist',
      'Cisco CCNA',
    ],
    image: wojciechImg,
  },
  {
    name: 'Mustafa Balimaz',
    country: 'Poland',
    role: 'Support',
    roleColor: 'slate',
    description: [
      'Support Specialist',
      'CCNP',
    ],
    image: mustafaBalimazImg,
  },
  {
    name: 'Maciej Wielgosz',
    country: 'Poland',
    role: 'AI Research & Dev',
    roleColor: 'purple',
    description: [
      'Head of AI Research & Development',
      'PhD and Professor, AGH University of Krakow',
    ],
    image: maciejImg,
  },
  {
    name: 'Kaung Sithu',
    country: 'Poland',
    role: 'Backend · AI',
    roleColor: 'cyan',
    description: [
      'Software Backend Developer',
      'AI Researcher',
    ],
    image: kaungImg,
  },
  {
    name: 'Min Khant Soe Oke',
    country: 'Poland',
    role: 'Backend',
    roleColor: 'cyan',
    description: ['Software Backend Developer'],
    image: minImg,
  },
  {
    name: 'Wai Yan Paing',
    country: 'Thailand',
    role: 'Frontend',
    roleColor: 'blue',
    description: ['Software Frontend Developer'],
    image: waiYanPaingImg,
  },
]

function TeamMember({ member, index }) {
  return (
    <article
      className="team-member"
      style={{ '--team-delay': `${200 + index * 90}ms`, '--dir': index % 2 === 0 ? '-1' : '1' }}
    >
      <div className="team-member-visual">
        <div className="team-member-ring" aria-hidden="true" />
        <div className="team-member-glow-ring" aria-hidden="true" />
        <div className="team-member-photo">
          {member.image ? (
            <img src={member.image} alt={member.name} />
          ) : (
            <span className="team-member-initials" aria-hidden="true">
              {member.name.split(' ').map(p => p[0]).join('').slice(0, 2)}
            </span>
          )}
        </div>
      </div>

      <div className="team-member-copy">
        <span className={`team-role-badge role-${member.roleColor}`}>{member.role}</span>
        <h2>{member.name}</h2>
        <span className="team-country">{member.country}</span>
        <div className="team-member-description">
          {member.description.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>
      </div>
    </article>
  )
}

export default function TeamSlide() {
  const firstRow = teamMembers.slice(0, 5)
  const secondRow = teamMembers.slice(5)

  return (
    <section className="team-section" aria-labelledby="team-heading">
      {/* Decorative background orbs */}
      <div className="team-bg-orb team-bg-orb-1" aria-hidden="true" />
      <div className="team-bg-orb team-bg-orb-2" aria-hidden="true" />
      <div className="team-bg-orb team-bg-orb-3" aria-hidden="true" />

      <div className="team-heading-row">
        <h1 id="team-heading" className="team-heading">Team</h1>
        <div className="team-count-badge">{teamMembers.length} members · 5 countries</div>
      </div>

      <div className="team-grid team-grid-top">
        {firstRow.map((member, index) => (
          <TeamMember key={member.name} member={member} index={index} />
        ))}
      </div>

      <div className="team-grid team-grid-bottom">
        {secondRow.map((member, index) => (
          <TeamMember key={member.name} member={member} index={index + firstRow.length} />
        ))}
      </div>
    </section>
  )
}
