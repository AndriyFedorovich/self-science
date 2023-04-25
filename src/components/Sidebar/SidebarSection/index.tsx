import React, { memo } from 'react';
import H5 from 'components/Typography/H5';
import LinkActive from 'components/LinkActive';
import styles from './SidebarSection.module.scss';
import SidebarLink from '../SidebarLink';

type SidebarSectionProps = {
  title?: string;
  list?: {
    id?: string;
    title?: string;
    link?: string;
    onClick?: () => void;
  }[];
};

const SidebarSection = ({ title, list = [] }: SidebarSectionProps) => {
  return (
    <>
      <H5 className={styles.listHeader}>{title}</H5>
      <div className={styles.list}>
        {list.map(({ id, title: itemTitle, link = '', onClick }) => (
          <div key={`${link}${id}`} className={styles.item}>
            <SidebarLink href={onClick ? '' : link} onClick={onClick}>
              {itemTitle || 'Untitled'}
            </SidebarLink>
          </div>
        ))}
      </div>
    </>
  );
};

export default memo(SidebarSection);
