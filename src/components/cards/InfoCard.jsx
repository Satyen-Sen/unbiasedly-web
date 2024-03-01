import { Box, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'

export default function InfoCard({ color, icon, title, subtitle }) {
  return (
    <Box
      sx={{
        border: `2px solid ${color}`,
        borderRadius: '20px',
        background: `linear-gradient(180deg, #FFFFFF 0%, ${color}1A 100%)`,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        p: '1.5rem',
        height: '100%',
        maxWidth: '25rem',
      }}
    >
      <Image src={icon} height={40} width={40} priority />
      <Typography variant='h5' sx={{ fontWeight: 800, color: '#171717', my: '0.75rem' }}>
        {title}
      </Typography>
      <Typography variant='h6' sx={{ textAlign: 'center' }}>
        {subtitle}
      </Typography>
    </Box>
  )
}
//images/info/icon-1