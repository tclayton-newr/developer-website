import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';
import { Link, Icon, Surface } from '@newrelic/gatsby-theme-newrelic';

const GuideTile = ({
  duration,
  title,
  description,
  className,
  to,
  procIdxisNotInteger,
}) => (
  <Surface
    as={Link}
    to={to}
    className={className}
    base={Surface.BASE.SECONDARY}
    interactive
    css={css`
      display: grid;
      grid-template-rows: auto 1fr auto;
      width: ${procIdxisNotInteger ? '100%' : '90%'};
      margin-left: ${procIdxisNotInteger ? '0' : '10%'};
      border-radius: 0.25rem;
      position: relative;
      padding: 1rem;
      transition: all 0.15s ease-out;
    `}
  >
    <h3
      css={css`
        font-size: 1rem;
        margin-bottom: ${procIdxisNotInteger ? '1rem' : '0.1rem'};
      `}
    >
      {title}
    </h3>
    <p
      css={css`
        font-size: 0.875rem;
        color: var(--secondary-text-color);
        flex: 1;
        text-align: left;
        padding: 0;
        margin-bottom: ${procIdxisNotInteger ? '0.8rem' : '0.1rem'};
      `}
    >
      {description}
    </p>

    {duration && (
      <div
        css={css`
          font-size: 0.75rem;
          display: inline-flex;
          gap: 0.25rem;
          align-items: center;
          color: var(--accent-text-color);
          border-radius: 0.25rem;
          justify-self: start;
        `}
      >
        <Icon name="fe-clock" />
        {duration} min
      </div>
    )}
  </Surface>
);

GuideTile.propTypes = {
  duration: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  className: PropTypes.string,
  to: PropTypes.string.isRequired,
  procIdxisNotInteger: PropTypes.bool,
};

export default GuideTile;
