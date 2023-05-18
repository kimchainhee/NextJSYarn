import Link from 'next/link'

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
    <main className="min-h-screen p-16">
      <div>
        <ul>
          <li style={{ display: 'inline-block' }}>
            <Link href="/About">About</Link>
          </li>{' '}
          |{' '}
          <li style={{ display: 'inline-block' }}>
            <Link href="/Blog">Blog</Link>
          </li>
        </ul>
      </div>
      <br />
      <div style={{ textAlign: 'center' }}>
        <b>List product</b>
      </div>
      <ul className="mb-1 grid lg:mb-0 lg:grid-cols-5 gap-5">
        <li style={{ display: 'inline-block' }}>
          <input type="text" id="fname" name="fname" placeholder="Dessert" />
        </li>
        <li style={{ display: 'inline-block' }}>
          <input type="text" id="fname" name="fname" placeholder="Calories" />
        </li>
        <li style={{ display: 'inline-block' }}>
          <input type="text" id="fname" name="fname" placeholder="Fat" />
        </li>
        <li style={{ display: 'inline-block' }}>
          <input type="text" id="fname" name="fname" placeholder="Carbs" />
        </li>
        <li style={{ display: 'inline-block' }}>
          <input type="text" id="fname" name="fname" placeholder="Protein" />
        </li>
      </ul>
      <input type="submit" value="Submit"></input>
      <div>
        <ul className="mt-2 grid lg:mb-0 grid-cols-5 gap-5">
          <li style={{ display: 'inline-block' }}>
            <b>Dessert</b>
          </li>
          <li style={{ display: 'inline-block' }}>
            <b>Calories</b>
          </li>
          <li style={{ display: 'inline-block' }}>
            <b>Fat</b>
          </li>
          <li style={{ display: 'inline-block' }}>
            <b>Carbs</b>
          </li>
          <li style={{ display: 'inline-block' }}>
            <b>Protein</b>
          </li>
        </ul>
      </div>
      <div>
        {rows.map((row) => (
          <ul className=" grid lg:mb-0 grid-cols-5 gap-5" key={row.name}>
            <li>{row.name}</li>
            <li>{row.calories}</li>
            <li>{row.fat}</li>
            <li>{row.carbs}</li>
            <li>{row.protein}</li>
          </ul>
        ))}
      </div>
    </main>
  )
}
