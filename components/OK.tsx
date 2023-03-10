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
      <div className="overflow-x-auto mt-10">
        <div className="mt-8 flow-root">
          <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
              <table className="min-w-full divide-y divide-gray-300">
                <thead>
                  <tr>
                    <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">
                      Name
                    </th>
                    <th scope="col" className="py-3.5 px-3 text-left text-sm font-semibold text-gray-900">
                      Vorname
                    </th>
                    <th scope="col" className="py-3.5 px-3 text-left text-sm font-semibold text-gray-900">
                      Ressort
                    </th>
                    <th scope="col" className="py-3.5 px-3 text-left text-sm font-semibold text-gray-900">
                      E-Mail
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {ok_members.map((member, index) => (
                    <tr key={index}>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                        {member.name}
                      </td>
                      <td className="whitespace-nowrap py-4 px-3 text-sm text-gray-500">{member.firstname}</td>
                      <td className="whitespace-nowrap py-4 px-3 text-sm text-gray-500">{member.ressort}</td>
                      <td className="whitespace-nowrap py-4 px-3 text-sm text-gray-500">
                        <a href={"mailto:" + member?.email}>{member?.email}</a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* <table className="table w-full">
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
        </table> */}
      </div>
    </Container>
  )

}

export default OK
