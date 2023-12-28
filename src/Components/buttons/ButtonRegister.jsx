import * as React from 'react';
import PropTypes from 'prop-types';
import { Button, buttonClasses } from '@mui/base/Button';
import { styled } from '@mui/system';

const ButtonRoot = React.forwardRef(function ButtonRoot(props, ref) {
    const { children, ...other } = props;

    return (
        <svg width="150" height="50" {...other} ref={ref}>
            <polygon points="0,50 0,0 150,0 150,50" className="bg" />
            <polygon points="0,50 0,0 150,0 150,50" className="borderEffect" />
            <foreignObject x="0" y="0" width="150" height="50">
                <div className="content">{children}</div>
            </foreignObject>
        </svg>
    );
});

ButtonRoot.propTypes = {
    children: PropTypes.node,
};

const SvgButton = React.forwardRef(function SvgButton(props, ref) {
    return <Button {...props} slots={{ root: CustomButtonRoot }} ref={ref} />;
});

export const ButtonRegister = () => {
    return (
        <SvgButton>Inscribirse</SvgButton>
    )
}
const blue = {
    50: '#fff',
    100: '#acdb88',
    200: '#60AD26',
    400: '#60AD26',
    500: '#60AD26',
    600: '#60AD26',
    700: '#60AD26',
    800: '#60AD26',
    900: '#60AD26',
  };
  
  const CustomButtonRoot = styled(ButtonRoot)(
    ({ theme }) => `
    overflow: visible;
    cursor: pointer;
    --main-color: ${theme.palette.mode === 'light' ? blue[600] : blue[200]};
    --hover-color: ${theme.palette.mode === 'light' ? blue[50] : blue[900]};
    --active-color: ${theme.palette.mode === 'light' ? blue[100] : blue[800]};
  
    & polygon {
      fill: transparent;
      transition: all 800ms ease;
      pointer-events: none;
    }
  
    & .bg {
      stroke: var(--main-color);
      stroke-width: 1;
      filter: drop-shadow(0 4px 16px rgba(0, 0, 0, 0.1));
      fill: transparent;
    }
  
    & .borderEffect {
      stroke: var(--main-color);
      stroke-width: 2;
      stroke-dasharray: 120 600;
      stroke-dashoffset: 120;
      fill: transparent;
    }
  
    &:hover,
    &.${buttonClasses.focusVisible} {
      .borderEffect {
        stroke-dashoffset: -600;
      }
  
      .bg {
        fill: var(--hover-color);
      }
    }
  
    &:focus,
    &.${buttonClasses.focusVisible} {
      outline: 2px solid ${theme.palette.mode === 'dark' ? blue[700] : blue[200]};
      outline-offset: 2px;
    }
  
    &.${buttonClasses.active} {
      & .bg {
        fill: var(--active-color);
        transition: fill 150ms ease-out;
      }
    }
  
    & foreignObject {
      pointer-events: none;
  
      & .content {
        font-size: 1.5rem;
        font-family: IBM Plex Sans, sans-serif;
        font-weight: 600;
        line-height: 1.5;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        color: var(--main-color);
      }
  
      & svg {
        margin: 0 4px;
      }
    }`,
  );