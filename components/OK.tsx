import Container from "./Container"

const OK = () => {
  const ok_members = [
    {
      name: 'Schmutz',
      firstname: 'Anton',
      ressort: 'Präsidium',
      email: ''
    },
    {
      name: 'Aebersold',
      firstname: 'Fritz',
      ressort: 'Sponsoring / Vize Präsidium',
      email: ''
    },
    {
      name: 'Wüthrich',
      firstname: 'Regina',
      ressort: 'Sekretariat',
      email: 'musiktag2023@mgkonolfingen.ch'
    },
    {
      name: 'Rothenbühler',
      firstname: 'Marianne',
      ressort: 'Finanzen',
      email: 'musiktag2023@mgkonolfingen.ch'
    },
    {
      name: 'Aebersold',
      firstname: 'Yvonne',
      ressort: 'Dekoration / Personenführung',
      email: ''
    },
    {
      name: 'Aeschlimann',
      firstname: 'Brigitte',
      ressort: 'Empfang',
      email: ''
    },
    {
      name: 'Walther',
      firstname: 'Céline',
      ressort: 'Kommunikation',
      email: ''
    },
    {
      name: 'Wüthrich',
      firstname: 'Thomas',
      ressort: 'Bau',
      email: ''
    },
    {
      name: 'Valuri',
      firstname: 'Lukas',
      ressort: 'Verkehr',
      email: ''
    },
    {
      name: 'Stucki',
      firstname: 'Tanja',
      ressort: 'Lotterie',
      email: ''
    },
    {
      name: 'Bracher',
      firstname: 'Stefan',
      ressort: 'Unterhaltung / Musikalisches',
      email: ''
    },
    {
      name: 'Lauber',
      firstname: 'Daniel',
      ressort: 'Festwirtschaft',
      email: ''
    },
  ]

  return (
    <Container>
      <h2 className="mx-auto max-w-2xl text-center font-display text-4xl font-medium tracking-tighter text-gray-900 sm:text-5xl">
        Das Organisationskomitee
      </h2>
      <div className="overflow-x-auto mt-20">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Vorname</th>
              <th>Ressort</th>
              <th>E-Mail</th>
            </tr>
          </thead>
          <tbody>
            {
              ok_members.map((member, index) => {
                return (
                  <tr key={index}>
                    <td></td>
                    <td>{member.name}</td>
                    <td>{member.firstname}</td>
                    <td>{member.ressort}</td>
                    <td>{member.email}</td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
    </Container>
  )

}

export default OK
