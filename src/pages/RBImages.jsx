import React from "react";
import { Image } from "react-bootstrap";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import "../assets/CSS/RBImages.css"

const RBImages = () => {

  // Avatar Group Data
  const users = [
    {
      name: "Radhika Parmar",
      image: "https://www.w3schools.com/howto/img_avatar2.png"
    },
    {
      name: "Rajkumar Jadeja",
      image: "https://www.w3schools.com/howto/img_avatar.png"
    },
    {
      name: "Madhav Jadon",
      image: "https://www.w3schools.com/w3css/img_avatar2.png"
    },
    {
      name: "Priya Singh",
      image: "https://www.w3schools.com/w3images/avatar5.png"
    }
  ];

  return (
    <div className="container mt-4">

      {/* Avatar With Name */}
      <h4 className="mb-3">Avatar With Name</h4>

      <div className="d-flex align-items-center mb-2">
        <Image
          src="https://www.w3schools.com/howto/img_avatar2.png"
          width={40}
          roundedCircle
          className="me-2"
        />
        <span>Radhika Parmar</span>
      </div>

      <div className="d-flex align-items-center mb-4">
        <Image
          src="https://www.w3schools.com/howto/img_avatar.png"
          width={40}
          roundedCircle
          className="me-2"
        />
        <span>Rajkumar Jadeja</span>
      </div>

      {/* Avatar Sizes */}
      <h4 className="mb-3">Avatar Sizes</h4>

      <div className="d-flex align-items-center gap-3 mb-4">
        {/* {[40, 50, 60, 80, 100].map((size, index) => (
          <Image
            key={index}
            src="https://www.w3schools.com/howto/img_avatar.png"
            width={size}
            roundedCircle
          />
        ))} */}
        <Image src="https://www.w3schools.com/howto/img_avatar.png" width={40} roundedCircle />
        <Image src="https://www.w3schools.com/howto/img_avatar.png" width={50} roundedCircle />
        <Image src="https://www.w3schools.com/howto/img_avatar.png" width={60} roundedCircle />
        <Image src="https://www.w3schools.com/howto/img_avatar.png" width={80} roundedCircle />
        <Image src="https://www.w3schools.com/howto/img_avatar.png" width={100} roundedCircle />
      </div>

      {/* Avatar Group */}
      <h4 className="mb-3">Avatar Group</h4>

      <div className="d-flex avatar-group">
        <Image
          src="https://www.w3schools.com/howto/img_avatar.png"
          width={40}
          roundedCircle
          className="avatar-img border border-white"
        />
        <Image
          src="https://www.w3schools.com/howto/img_avatar.png"
          width={40}
          roundedCircle
          className="avatar-img border border-white"
        />
        <Image
          src="https://www.w3schools.com/howto/img_avatar.png"
          width={40}
          roundedCircle
          className="avatar-img border border-white"
        />
        <Image
          src="https://www.w3schools.com/howto/img_avatar.png"
          width={40}
          roundedCircle
          className="avatar-img border border-white"
        />
      </div>

      {/* Avatar Group */}
      {/* <h4 className="mb-3">Avatar Group</h4>

      <div className="d-flex avatar-group">
        {[1, 2, 3, 4].map((id, index) => (
          <Image
            key={index}
            src={`https://www.w3schools.com/howto/img_avatar.png`}
            width={40}
            roundedCircle
            className="avatar-img border border-white"
          />
        ))}
      </div> */}

          {/* Avatar Group With Tooltip */}
      <h4 className="mb-3">Avatar Group With Tooltip</h4>

      <div className="d-flex avatar-group">
        {users.map((user, index) => (
          <OverlayTrigger
            key={index}
            placement="top"
            overlay={
              <Tooltip id={`tooltip-${index}`}>{user.name}</Tooltip>
            }
          >
            <Image
              src={user.image}
              width={40}
              roundedCircle
              className="avatar-img border border-white"
            />
          </OverlayTrigger>
        ))}
      </div>


    </div>
  );
};

export default RBImages;








{/* Avatar Group */ }
{/* <h4 className="mb-3">Avatar Group</h4> */ }

{/* <div className="d-flex">
        <Image
          src="https://www.w3schools.com/howto/img_avatar.png" width={40}
          roundedCircle
          className="border border-white"
          style={{ marginLeft: "0px" }}
        />
        <Image
          src="https://www.w3schools.com/howto/img_avatar.png" width={40}
          roundedCircle
          className="border border-white"
          style={{ marginLeft: "-15px" }}
        />
        <Image
          src="https://www.w3schools.com/howto/img_avatar.png" width={40}
          roundedCircle
          className="border border-white"
          style={{ marginLeft: "-15px" }}
        />
        <Image
          src="https://www.w3schools.com/howto/img_avatar.png" width={40}
          roundedCircle
          className="border border-white"
          style={{ marginLeft: "-15px" }}
        />
      </div> */}
{/* Avatar Group */ }
{/* <h4 className="mb-3">Avatar Group</h4>

      <div className="d-flex avatar-group">
        {[4, 5, 6, 7].map((id, index) => (
          <img
          key={index}
          src={`https://i.pravatar.cc/40?img=${id}`}
          alt="avatar"
          className="avatar-img"
          />
        ))}
      </div> */}

{/* <div className="d-lg-flex">
      <AvatarGroup className="me-2">
        <Avatar size="lg" src={Avatar1} type="image" className="rounded-circle" />
        <Avatar size="lg" src={Avatar2} type="image" className="rounded-circle" />
        <Avatar size="lg" src={Avatar3} type="image" className="rounded-circle" />
        <Avatar size="lg" src={Avatar4} type="image" className="rounded-circle" />
      </AvatarGroup>
      </div> */}