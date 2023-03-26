import React, { FC, useState } from 'react';
import { v4 as uuid } from 'uuid';
import cn from 'classnames'

interface CharProps {
}

const defaultUrlImages = "/images/char/items"

const charItems = [
  {
    id: uuid(),
    position: 'left left-1',
    type: 'Head',
    link: 'https://mop-shoot.tauri.hu/?item=99389',
    boss: 'Thok (Ток)',
    description: `${defaultUrlImages}/description/head_description.png`,
    icon: `${defaultUrlImages}/icon/head_icon.jpg`,
    isHovered: false
  },
  {
    id: uuid(),
    position: 'left left-2',
    type: 'Neck',
    link: 'https://mop-shoot.tauri.hu/?item=105095',
    boss: 'Spoils (Трофеи)',
    description: `${defaultUrlImages}/description/neck_description.png`,
    icon: `${defaultUrlImages}/icon/neck_icon.jpg`,
    isHovered: false
  },
  {
    id: uuid(),
    position: 'left left-3',
    type: 'Shoulder',
    link: 'https://mop-shoot.tauri.hu/?item=99381',
    boss: 'Siegecrafter Blackfuse (Черноплав)',
    description: `${defaultUrlImages}/description/shoulder_description.png`,
    icon: `${defaultUrlImages}/icon/shoulder_icon.jpg`,
    isHovered: false
  },
  {
    id: uuid(),
    position: 'left left-4',
    type: 'Back',
    link: 'https://mop-shoot.tauri.hu/?item=102246',
    boss: '',
    description: `${defaultUrlImages}/description/back_description.png`,
    icon: `${defaultUrlImages}/icon/back_icon.jpg`,
    isHovered: false
  },
  {
    id: uuid(),
    position: 'left left-5',
    type: 'Chest',
    link: 'https://mop-shoot.tauri.hu/?item=99391',
    boss: 'Sha of Pride (Ша Гордыни)',
    description: `${defaultUrlImages}/description/chest_description.png`,
    icon: `${defaultUrlImages}/icon/chest_icon.jpg`,
    isHovered: false
  },
  {
    id: uuid(),
    position: 'left left-6',
    type: 'Shirt',
    link: '',
    boss: '',
    description: `${defaultUrlImages}/description/shirt_description.png`,
    icon: `${defaultUrlImages}/icon/shirt_icon.jpg`,
    isHovered: false
  },
  {
    id: uuid(),
    position: 'left left-7',
    type: 'Tabard',
    link: 'https://mop-shoot.tauri.hu/?item=98162',
    boss: '',
    description: `${defaultUrlImages}/description/tabard_description.png`,
    icon: `${defaultUrlImages}/icon/tabard_icon.jpg`,
    isHovered: false
  },
  {
    id: uuid(),
    position: 'left left-8',
    type: 'Wrist',
    link: 'http://mop-shoot.tauri.hu/?item=104429',
    boss: 'Immerseus (Глубиний)',
    description: `${defaultUrlImages}/description/wrist_description.png`,
    icon: `${defaultUrlImages}/icon/wrist_icon.jpg`,
    isHovered: false
  },
  {
    id: uuid(),
    position: 'center center-1',
    type: 'Main Hand',
    link: 'http://mop-shoot.tauri.hu/?item=103873',
    boss: 'Sha of Pride (Ша Гордыни)',
    description: `${defaultUrlImages}/description/main_hand_description.png`,
    icon: `${defaultUrlImages}/icon/main_hand_icon.jpg`,
    isHovered: false
  },
  {
    id: uuid(),
    position: 'center center-2',
    type: 'Off Hand',
    link: '',
    boss: '',
    description: `${defaultUrlImages}/description/off_hand_description.png`,
    icon: `${defaultUrlImages}/icon/off_hand_icon.jpg`,
    isHovered: false
  },
  {
    id: uuid(),
    position: 'right right-1',
    type: 'Hands',
    link: 'http://mop-shoot.tauri.hu/?item=99388',
    boss: 'Nazgrim (Назгрим)',
    description: `${defaultUrlImages}/description/hands_description.png`,
    icon: `${defaultUrlImages}/icon/hands_icon.jpg`,
    isHovered: false
  },
  {
    id: uuid(),
    position: 'right right-2',
    type: 'Waist',
    link: 'http://mop-shoot.tauri.hu/?item=104504',
    boss: 'Galakras (Галакрас)',
    description: `${defaultUrlImages}/description/waist_description.png`,
    icon: `${defaultUrlImages}/icon/waist_icon.jpg`,
    isHovered: false
  },
  {
    id: uuid(),
    position: 'right right-3',
    type: 'Legs',
    link: 'http://mop-shoot.tauri.hu/?item=104556',
    boss: 'Nazgrim (Назгрим)',
    description: `${defaultUrlImages}/description/legs_description.png`,
    icon: `${defaultUrlImages}/icon/legs_icon.jpg`,
    isHovered: false
  },
  {
    id: uuid(),
    position: 'right right-4',
    type: 'Feet',
    link: 'https://mop-shoot.tauri.hu/?item=104471',
    boss: 'Norushen (Норусхен)',
    description: `${defaultUrlImages}/description/feet_description.png`,
    icon: `${defaultUrlImages}/icon/feet_icon.jpg`,
    isHovered: false
  },
  {
    id: uuid(),
    position: 'right right-5',
    type: 'Ring',
    link: 'https://mop-shoot.tauri.hu/?item=104427',
    boss: 'Immerseus (Глубиний)',
    description: `${defaultUrlImages}/description/ring1_description.png`,
    icon: `${defaultUrlImages}/icon/ring1_icon.jpg`,
    isHovered: false
  },
  {
    id: uuid(),
    position: 'right right-6',
    type: 'Ring',
    link: 'https://mop-shoot.tauri.hu/?item=103772',
    boss: 'Malkorok (Малкарок)',
    description: `${defaultUrlImages}/description/ring2_description.png`,
    icon: `${defaultUrlImages}/icon/ring2_icon.jpg`,
    isHovered: false
  },
  {
    id: uuid(),
    position: 'right right-7',
    type: 'Trinket',
    link: 'https://mop-shoot.tauri.hu/?item=104478',
    boss: 'Sha of Pride (Ша Гордыни)',
    description: `${defaultUrlImages}/description/trinket1_description.png`,
    icon: `${defaultUrlImages}/icon/trinket1_icon.jpg`,
    isHovered: false
  },
  {
    id: uuid(),
    position: 'right right-8',
    type: 'Trinket',
    link: 'https://mop-shoot.tauri.hu/?item=104611',
    boss: 'Thok (Ток)',
    description: `${defaultUrlImages}/description/trinket2_description.png`,
    icon: `${defaultUrlImages}/icon/trinket2_icon.jpg`,
    isHovered: false
  },
]

const Char: FC<CharProps> = ({}) => {
  const [bisItems, setBisItems] = useState(charItems)

  console.log(bisItems)

  return (
    <div className="char">
      <div className="char__container">
        <div className="char__title title">
          Bis list - <span style={{ color: "#00EE8C" }}>Aquarellex</span>
        </div>
        <div className="char__info">
          <div className="char__info_title title">
            Gear Info:
          </div>
          <div className="char_interface">
            {bisItems.map(({ id, boss, icon, isHovered, position, link, description }) => (
              <div key={id} className={cn(`char_box grid_${position}`, {hovered: isHovered})} style={{ backgroundImage: `url(${icon})` }}>
                <div
                  className="char_item"
                  onMouseEnter={() => setBisItems(prev => prev.map(item => item.id === id ? ({
                    ...item,
                    isHovered: true
                  }) : item))}
                  onMouseLeave={() => setBisItems(prev => prev.map(item => item.id === id ? ({
                    ...item,
                    isHovered: false
                  }) : item))}
                >
                  <a className="char_link" href={link} target={link ? "_blank" : "_self"}/>
                </div>

                {isHovered && (
                  <div className="char_item_description">
                    {boss && (
                      <div className="description_boss text">
                        <div>Boss:</div> {boss}
                      </div>
                    )}
                    <img className="description_image" src={description} alt=""/>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Char;