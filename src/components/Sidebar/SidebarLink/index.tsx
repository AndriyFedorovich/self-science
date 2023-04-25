import React, { memo, ReactNode } from 'react';
import LinkActive from 'components/LinkActive';
import styles from './SidebarLink.module.scss';

type SidebarLinkProps = {
  href: string;
  children: ReactNode;
  onClick?: () => void;
};

const SidebarLink = ({ href, children, onClick }: SidebarLinkProps) => (
  <LinkActive
    className={styles.link}
    activeClassName={styles.active}
    href={onClick ? '' : href}
    onClick={onClick}
  >
    <span className={styles.linkValue}>{children}</span>
  </LinkActive>
);

export default memo(SidebarLink);
