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
    name: 'Mustafa Sakhai (Poland)',
    description: [
      'Founder & CEO, Head of Business Development',
      'PhD researcher in Autonomous systems',
      'Lecturer, AGH University of Krakow',
      'Cisco Certified Internetwork Expert (CCIE) Security',
    ],
    image: mustafaSakhaiImg,
  },
  {
    name: 'Daniela Magellan Ramirez (Mexico)',
    description: [
      'Head of Engineering',
      'Cisco Certified Network Professional (CCNP)',
    ],
    image: danielaImg,
  },
  {
    name: 'Anup Raveen Jaison (India)',
    description: [
      'Head of Business Operations and Strategy',
      'MBA, IE Business School, Spain',
      'Cisco Certified DevNet and Network Associate',
    ],
    image: anupImg,
  },
  {
    name: 'Wojciech Górny (Poland)',
    description: [
      'Cybersecurity Specialist',
      'Cisco Certificate Network Associate (CCNA)',
    ],
    image: wojciechImg,
  },
  {
    name: 'Mustafa Balimaz (Poland)',
    description: [
      'Support Specialist',
      'CCNP',
    ],
    image: mustafaBalimazImg,
  },
  {
    name: 'Maciej Wielgosz (Poland)',
    description: [
      'Head of AI Research & Development',
      'PhD and Professor, AGH University of Krakow',
    ],
    image: maciejImg,
  },
  {
    name: 'Sithu Kaung (Poland)',
    description: [
      'Software Backend Developer',
      'AI Researcher',
    ],
    image: kaungImg,
  },
  {
    name: 'Min Khant Soe Oke (Poland)',
    description: ['Software Backend Developer'],
    image: minImg,
  },
  {
    name: 'Wai Yan Paing (Thailand)',
    description: ['Software Frontend Developer'],
    image: waiYanPaingImg,
  },
]

function TeamMember({ member, index }) {
  const initials = member.name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .slice(0, 2)

  return (
    <article className="team-member" style={{ '--team-delay': `${240 + index * 110}ms` }}>
      <div className="team-member-visual">
        <div className="team-member-ring" aria-hidden="true" />
        <div className="team-member-photo">
          {member.image ? (
            <img src={member.image} alt={member.name} />
          ) : (
            <span className="team-member-initials" aria-hidden="true">
              {initials}
            </span>
          )}
        </div>
      </div>

      <div className="team-member-copy">
        <h2>{member.name}</h2>
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
      <h1 id="team-heading" className="team-heading">
        Team
      </h1>

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
