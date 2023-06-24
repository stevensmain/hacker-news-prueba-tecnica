import { style } from '@vanilla-extract/css'

export const header = style({
  alignItems: 'center',
  display: 'flex',
  borderBottom: '1px solid #eee',
  gap: '1rem',
  padding: '8px 32px'
})

export const logo = style({
  width: '50px',
  height: '50px'
})

export const link = style({
  textDecoration: 'none',
  fontSize: '16px',
  color: '#3ef',
  margin: '0'
})
