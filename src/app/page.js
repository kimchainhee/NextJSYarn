// import {
//   Button,
//   Container,
//   Grid,
//   Paper,
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   Typography,
//   TextField,
//   Box,
//   Divider,
// } from '@mui/material'

// import Link from 'next/link'

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein }
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
]

export default function Home() {
  return (
    <main className="min-h-screen p-8">
      List product
      {/* <Container maxWidth="lg">
        <Grid container spacing={1} alignItems="center">
          <Grid item>
            <Link href="/About">
              <Typography variant="h6">
                <b>About</b>
              </Typography>
            </Link>
          </Grid>
          <Divider orientation="vertical" flexItem sx={{ marginLeft: 1 }} />
          <Grid item>
            <Link href="/Blog">
              <Typography variant="h6">
                <b>Blog</b>
              </Typography>
            </Link>
          </Grid>
        </Grid>

        <Typography variant="h6" paragraph align="center">
          <b>Danh sách sản phẩm</b>
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md>
            <TextField label="Dessert" size="small" fullWidth />
          </Grid>
          <Grid item xs={12} sm={6} md>
            <TextField label="Calories" size="small" fullWidth />
          </Grid>
          <Grid item xs={12} sm={6} md>
            <TextField label="Fat" size="small" fullWidth />
          </Grid>
          <Grid item xs={12} sm={6} md>
            <TextField label="Carbs" size="small" fullWidth />
          </Grid>
          <Grid item xs={12} sm={6} md>
            <TextField label="Protein" size="small" fullWidth />
          </Grid>
          <Grid item xs={12}>
            <Box align="center">
              <Button variant="contained" component={Link} href="/">
                Thêm sản phẩm
              </Button>
            </Box>
          </Grid>
        </Grid>
        <br />
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Dessert (100g serving)</TableCell>
                <TableCell align="right">Calories</TableCell>
                <TableCell align="right">Fat&nbsp;(g)</TableCell>
                <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                <TableCell align="right">Protein&nbsp;(g)</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{row.calories}</TableCell>
                  <TableCell align="right">{row.fat}</TableCell>
                  <TableCell align="right">{row.carbs}</TableCell>
                  <TableCell align="right">{row.protein} </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container> */}
    </main>
  )
}
