'use client'
import { Grid, Container, Typography, IconButton } from '@mui/material'
import Link from 'next/link'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'

export const metadata = {
  title: 'Home',
  description: 'Welcome to Next.js',
}

export default function About() {
  return (
    <main className="min-h-screen p-8">
      <Container maxWidth="lg">
        <Grid container spacing={2} alignItems="center">
          <Grid item>
            <IconButton component={Link} href="/">
              <ArrowBackIcon />
            </IconButton>
          </Grid>
          <Grid item xs>
            <Typography variant="h6">
              About
            </Typography>
          </Grid>
        </Grid>
        <Typography align="center" variant="h6">
          <b>About Page</b>
        </Typography>
      </Container>
    </main>
  )
}
