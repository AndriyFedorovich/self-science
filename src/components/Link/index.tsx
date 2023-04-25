import React, { memo, ReactNode } from 'react';
import NextLink, { LinkProps as NextLinkProps } from 'next/link';

interface LinkProps extends NextLinkProps {
  children: ReactNode;
  className?: string;
}

const Link = ({ children, className, href }: LinkProps) => (
  <NextLink href={href}>
    <a className={className}>{children}</a>
  </NextLink>
);

export default memo(Link);
