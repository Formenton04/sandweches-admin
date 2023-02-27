import * as React from "react";
import PropTypes from "prop-types";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Dialog from "@mui/material/Dialog";
import "../App.css";
import { useState } from "react";
import { getArchiveProduct, getProductAllergens,getProductCategory,getProductIngredient,getProductTag,
modifyProductCategory,modifyProductName,modifyProductDescription,modifyProductQuantity,modifyProductPrice,DeleteProduct
} from "../api/prova";
import { ScrollView, View, Text } from 'react-native';
import { useQuery, useMutation } from "@tanstack/react-query";
import { Category } from "@mui/icons-material";




const categories = ["Panino","Piadina","Snack","Dolce","Bevanda"];

const  ProductPopup = props => {
  const { onClose, selectedValue, open } = props;
  const idScelto=props.selected_id;
  const nameProdotto= props.selected_name;
  const descrizioneProdotto=props.selected_description;
  const quantityProdotto= props.selected_quantity;
  const priceProdotto= props.selected_price;


  const [kcal, setKcal] = useState(0);
  const [fat, setFat] = useState(0);
  const [saturedFat, setSaturedFat] = useState(0);
  const [carbohydrate, setCarbohydrate] = useState(0);
  const [sugar, setSugar] = useState(0);
  const [protein, setProtein]= useState(0);
  const [fiber, setFiber] = useState(0);
  const [salt, setSalt] = useState(0);
  const [category, setCategory] = useState(categories[0]);
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState(0);
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');





  const handleKclaChange = (event) => {
    setKcal(parseInt(event.target.value))
  }
  const handleFatChange = (event) => {
    setFat(parseInt(event.target.value))
  }
  const handleSaturedFatChange = (event) => {
    setSaturedFat(parseInt(event.target.value))
  }
  const handleCarbohydrateChange = (event) => {
    setCarbohydrate(parseInt(event.target.value))
  }
  const handleSugarChange = (event) => {
    setSugar(parseInt(event.target.value))
  }
  const handleProteinChange = (event) => {
    setProtein(parseInt(event.target.value))
  }
  const handleFiberChange = (event) => {
    setFiber(parseInt(event.target.value))
  }
  const handleSaltChange = (event) => {
    setSalt(parseInt(event.target.value))
  }

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value) => {
    onClose(value);
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleQuantityChange = (event) => {
    setQuantity(parseInt(event.target.value));
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };



  const productQuery = useQuery({
    queryKey: ["products"],
    queryFn: (obj) => {
        console.log(obj);
      return getArchiveProduct()
    }                               
  }) 
  let productname=[];
  let cnt=0;
  let idprodotti=[];
  let qtprodotto=[];
  let pzprodotto=[];


  const AllergenQuery = useQuery({
    queryKey: ["allergens"],
    queryFn: (obj) => {
        console.log(obj);
      return getProductAllergens(idScelto)
    }                               
  }) 

  const CategoryQuery = useQuery({
    queryKey: ["category"],
    queryFn: (obj) => {
        console.log(obj);
      return getProductCategory(idScelto)
    }                               
  }) 

  const ProductIngredient  = useQuery({
    queryKey: ["Pingredient"],
    queryFn: (obj) => {
        console.log(obj);
      return getProductIngredient(idScelto)
    }                               
  }) 

  const ProductTag = useQuery({
    queryKey: ["tag"],
    queryFn: (obj) => {
        console.log(obj);
      return getProductTag(idScelto)
    }                               
  }) 

  function ModifyCategory(id,Pcategory)
  {
    const NewCategory = useQuery({
      queryKey: ["categoryNew"],
      queryFn: (obj) => {
          console.log(obj);
        return modifyProductCategory(id,Pcategory)
      }                               
    }) 
  }
  function ModifyName(id,Pname)
  {
    const NewName = useQuery({
      queryKey: ["NameNew"],
      queryFn: (obj) => {
          console.log(obj);
        return  modifyProductName(id,Pname)
      }                               
    }) 
  }

  function ModifyDescription(id,Pdescription)
  {
    const NewDescription = useQuery({
      queryKey: ["DescriptionNew"],
      queryFn: (obj) => {
          console.log(obj);
        return  modifyProductDescription(id,Pdescription)
      }                               
    }) 
  }

    function ModifyQuantity(id,Pquantity)
  {
    const NewQuantity = useQuery({
      queryKey: ["QuantityNew"],
      queryFn: (obj) => {
          console.log(obj);
        return  modifyProductQuantity(id,Pquantity)
      }                               
    }) 
  }
  function ModifyPrice(id,Pprice)
  {
    const NewPrice = useQuery({
      queryKey: ["PriceNew"],
      queryFn: (obj) => {
          console.log(obj);
        return  modifyProductPrice(id,Pprice)
      }                               
    }) 
  }
  function ProductDelete(id,Pactive)
  {
    const NewPrice = useQuery({
      queryKey: ["DeleteP"],
      queryFn: (obj) => {
          console.log(obj);
        return  DeleteProduct(id,Pactive)
      }                               
    }) 
  }
  
  
  
  
  return (
    <Dialog
      onClose={handleClose}
      open={open}
      sx={{ '& .MuiBackdrop-root': { backgroundColor: 'transparent', borderRadius: '60px' },
      "& .MuiDialog-container": {
        alignItems: "flex-start"
      }, boxShadow: 'none'
      }}
      PaperProps={{
        style: { borderRadius: 20, position: 'initial', height:"800px", width:"900px" }   
      }}
    >

      <ScrollView horizontal="true">
      { productQuery.data?.map( product=>(
            <div key={product.id} className={product.id === idScelto ? "highlighted" : ""}  {...idprodotti[cnt]=product.id}{...productname[cnt]=product.name}{...cnt++}>
            <label style={{margin:"20px"}}>
            {product.name} 
            </label>
            </div>
            ))} 
      </ScrollView>



      <div style={{position: "fixed", top:"15%", left:"36%"}} >
        <label> Name: {nameProdotto}</label>
        <input type="text" value={name} onChange={handleNameChange} />
        <button type="submit" style={{position:'fixed', top:"17.7%",  left: "49%" }} onclick={ModifyName(idScelto,name)} ><h2>Change name</h2></button>
      </div>

      <div style={{position: "fixed", top:"23%", left:"36%"}}>
        <label> Quantità: {quantityProdotto}</label>
        <input type="number" value={quantity} onChange={handleQuantityChange} />
        <button type="submit" style={{position:'fixed', top:"25.5%",  left: "42%" }} onclick={ModifyQuantity(idScelto,quantity)} ><h2>Change Quantity</h2></button>
      </div>

      <div style={{position: "fixed", top:"31%", left:"36%"}}>
        <label> Descrizione: {descrizioneProdotto}</label>
        <input  type="text"  value={description}  onChange={handleDescriptionChange} style={{}} />
        <button type="submit" style={{position:'fixed', top:"33.5%",  left: "50%" }} onclick={ModifyDescription(idScelto,description)}><h2>Change Description</h2></button>
      </div>

      <div style={{position: "fixed", top:"41%", left:"36%"}}>
        <label> Price: £ {priceProdotto}
        <input type="number" step="0.01" value={price} onChange={handlePriceChange} />
        <button type="submit" style={{position:'fixed', top:"43%",  left: "40%" }} onclick={ModifyPrice(idScelto,price)} ><h2>Change Price</h2></button>
        </label>
      </div>
      <div style={{position:"fixed", top: "50%", left:"36%"}}> 
      Category: {CategoryQuery.data?.map( Category=>(
            <div key={Category.id} >
            <label style={{margin:"20px", position:"fixed",top:"50.1%", right:"56%" }}>
            {Category.name} 
            </label>
            </div>
            ))} 
             <select value={category} onChange={handleCategoryChange} style={{position: "fixed", top:"52%", left:"36%"}}>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
          <button type="submit" style={{position:'fixed', top:"52%",  left: "47%" }} onClick={ModifyCategory(idScelto,category)} ><h2>Change Category</h2></button>
      </div>
      <div style={{position:"fixed", top:"60%"}}>
      Ingredient : {ProductIngredient.data?.map(Pingredient=>(
        <div key={Pingredient.id} >
        <label style={{margin:"5px"}}>
        {Pingredient.name} 
        </label>
        </div>
      ))}
      </div>

      <div style={{position:"fixed", top:"60%", left:"47%"}}>
      Tag : {ProductTag.data?.map(tag=>(
        <div key={tag.id} >
        <label style={{margin:"20px"}}>
        {tag.name} 
        </label>
        </div>
      ))}
      </div>

      <div style={{position:"fixed", top:"60%", left:"55%"}}>
      Allergeni: {AllergenQuery.data?.map(allergens=>(
        <div key={allergens.id}>
        <label style={{margin:"20px"}}>
        {allergens.name} 
        </label>
        </div>
      ))}
      </div>
      <button type="submit" style={{position:'fixed', bottom:"22%",  left: "42%", }} className="submit_button" onclick={ProductDelete(idScelto,0)}><h2>Delete</h2></button>

    </Dialog>
  );
}

export default ProductPopup;

        
      

