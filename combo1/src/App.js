import React, { Component } from 'react';
import Announcements from './components/announcements';
import Navbar from './components/navbar';
import Carousels from './components/carousel';
import Itemgrid from './components/itemholder/itemgrid';


class App extends Component {
  state = {
   webitems: [
    { category: "Tops",
      price: "$49.99",
      stocked: true,
      name: "Off-White Tee Diagonal Burning Arrows in Black",
      quantity:2,
      imgsrc: "https://media.vrients.com/media/catalog/product/cache/7/image/1200x/602f0fa2c1f0d1ba5e241f914e856ff9/1/9/1966_arrows_t_shirt_vrients_vrnts_off_white_shop_online_fw16_17_02_1.jpg",
      brand: "Off-White"
    },
    { category: "Tops",
      price: "$9.99",
      stocked: true,
      name: "Supreme Tee X CDG SS18 in Black",
      quantity:2,
      imgsrc: "https://i-h1.pinimg.com/564x/9b/80/c5/9b80c581671267a2624b64f81a2dacdb.jpg",
      brand: "Supreme"
    },
    { category: "Bottoms",
       price: "$29.99",
       stocked: true,
       name: "Fear of God Trackpants 2018 season in Black/White",
      quantity:2,
      imgsrc: "https://i-h1.pinimg.com/564x/b7/47/f2/b747f2e655b64d10c66e32ad2c3eb313.jpg",
      brand: "Fear of God"
    },
    { category: "Bottoms",
      price: "$99.99",
      stocked: true,
      name: "Balenciaga Oversized Faded Jeans",
      quantity:2,
      imgsrc: "https://i-h1.pinimg.com/564x/30/74/c4/3074c47d48002ee69f37e910e95a3003.jpg",
      brand: "Balenciaga"
    },
    { category: "Shoe",
      price: "$399.99",
      stocked: true,
      name: "Gucci Slides with Traction",
      quantity:2,
      imgsrc: "https://i-h1.pinimg.com/564x/00/81/0f/00810fb89ea40d4c99a977233ba41aae.jpg",
      brand: "Gucci"
    },
    { category: "Shoe",
      price: "$399.99",
      stocked: true,
      name: "Louis Vuitton Light Dad Shoe",
      quantity:2,
      imgsrc: "https://i-h1.pinimg.com/564x/c9/43/be/c943befa461cbeebfd8e50f4fe25d3b6.jpg",
      brand: "Louis Vuitton"
    },
    { category: "Acessories",
      price: "$199.99",
      stocked: true,
      name: "Burberry Heritage Cashmere Checkered Scarf",
      quantity:2,
      imgsrc: "https://i-h1.pinimg.com/564x/d6/f2/85/d6f2852a79f94c31e7cae8de04d65a11.jpg",
      brand: "Burberry"
    }
   ]
 }


  render() {
    return (
      <div className="App">
        <Announcements/>
        <Navbar/>
        <Carousels/>
        <div className="container" style={{display:'flex', flexWrap: 'wrap'}}>
          <Itemgrid webitems={this.state.webitems}/>
        </div>
      </div>
    );
  }
}

export default App;
