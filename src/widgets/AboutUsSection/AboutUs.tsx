import {FC} from 'react';
import classNames from 'classnames';
import neo from 'shared/assets/img/neo.png';
import trinity from 'shared/assets/img/trinity.png';
import morpheus from 'shared/assets/img/morpheus.png';
import cls from './AboutUs.module.scss';

const memberRole = [
  `Our team lead, Nadya, played a pivotal role in bringing our team together and shaping the app's
   development. Her expertise in wireframing, layout, routing, and design was instrumental in
   creating a user-friendly and visually appealing interface. She also effectively managed Jira
   and assigned tasks to ensure efficient project execution.`,
  `Alexander is our e-Commerce savior. His expertise in handling server requests was
   instrumental in breathing life into our app. Thanks to him, our application gained
  its logic, user accounts, and product management capabilities.`,
  `Pavel is our go-to person for tackling challenging tasks. His expertise in
  e-Commerce tools, deployment preparation, and page layouts makes him an invaluable
  asset to our team. He's always eager to lend a hand, no matter how tedious or
  time-consuming the task may be.`,
];

// Team member type with linked image and GitHub profile
interface TeamMember {
  image: string; // Path to team member image
  role: string;
  github: string; // GitHub profile URL
}

const team: {[key: string]: TeamMember} = {
  trinity: {
    image: trinity,
    role: memberRole[0],
    github: 'https://github.com/nadyayusova',
  },
  neo: {
    image: neo,
    role: memberRole[1],
    github: 'https://github.com/boolick',
  },
  morpheus: {
    image: morpheus,
    role: memberRole[2],
    github: 'https://github.com/PFilippov1',
  },
};

const AboutUs: FC = () => {
  return (
    <div className={classNames(cls.container)}>
      {/* Team member content with linked images */}
      {Object.entries(team).map(([characterName, {image, role, github}]) => (
        <div key={characterName} className={classNames(cls['team-member'])}>
          <a href={github} target="_blank" rel="noopener noreferrer">
            <img
              className={classNames(cls['team-member-img'])}
              src={image}
              alt={`${characterName}`}
            />
          </a>
          <p>{role}</p>
        </div>
      ))}
    </div>
  );
};

export {AboutUs};
