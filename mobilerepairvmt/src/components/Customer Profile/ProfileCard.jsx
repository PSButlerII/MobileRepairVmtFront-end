const ProfileCard = ({ users}) => {
  return (
    <React.Fragment>
      {console.log(users)}
      <div className="profile">
        {items?.map((user) => (
          <React.Fragment key={user.Id}>
            <ItemMap users={users} />
          </React.Fragment>
        ))}
      </div>
    </React.Fragment>
  );
};

export default ProfileCard;