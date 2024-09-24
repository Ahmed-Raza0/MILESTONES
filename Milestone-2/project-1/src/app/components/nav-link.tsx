import { UserGroupIcon, HomeIcon, DocumentDuplicateIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import styles from '@/app/css/Navlink.module.css'; // Adjust the path as necessary

const links = [
  { name: 'Home', href: '/', icon: HomeIcon },
  { name: 'About', href: '/About', icon: UserGroupIcon },  
  { name: 'Contact', href: '/Contact', icon: DocumentDuplicateIcon },   
];

export default function NavLinks() {
  return (
    <nav className={styles.nav}>
      <h1 className={styles.title}>Portfolio</h1> 
      <div className={styles.links}>
        {links.map((link) => {
          const LinkIcon = link.icon;
          return (
            <Link
              key={link.name} 
              href={link.href}
              className={styles.link}
            >
              <LinkIcon className={styles.icon} /> 
              <span className={styles.linkname}>{link.name}</span> 
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
