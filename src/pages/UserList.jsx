import { useCallback, useState, useEffect } from 'react';
import UserProfile from '../components/UserProfile';

let users = ['Eva', 'Aude', 'Anne', 'Marc', 'Sansom']

function UserList() {
  const [searchCriteria, setSearchCriteria] = useState('')
  const handleSearch = useCallback(event => setSearchCriteria(event.target.value), [])

  const [filteredUsers, setFilteredUsers] = useState([])
  useEffect(() => {
    setFilteredUsers(users.filter(user => user.toLowerCase().includes(searchCriteria.toLowerCase())))
  }, [searchCriteria])

  return (
    <div>
      <h1 className='text-center'>Liste des utilisateurs</h1>
      <div className="container mt-3">
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-5">
            <input type="text" className='form-control' placeholder='Recherche' onChange={handleSearch} />
          </div>
          <div className="col-xs-9 col-sm-9 col-md-3 mt-sm-3 mt-md-0">
            <input id='addUser' type="text" className='form-control' placeholder='Nouvel utilisateur' />
          </div>
          <div className="col-xs-3 col-sm-3 col-md-2 mt-sm-3 mt-md-0">
            <button className="btn btn-primary w-100" onClick={users.push(document.getElementById('addUser').value)}>Créer</button>
          </div>
        </div>
      </div>
      <div className="container mt-3">
        <div className="row">
          {
            filteredUsers.map((user, i) =>
              <div className="col-xs-6 col-sm-4 col-md-3 mb-3" key={i}>
                <UserProfile user={user} />
              </div>
            )}
          <div className="d-flex col-3 mb-3 justify-content-center align-items-center" >
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserList;