

//   const handleSearchUsers = (e) => {
//     e.preventDefault();
//     const filteredUsers = products.filter((product) => {
//       const lowerCaseQuery = searchQueryUsers.toLowerCase();
//       return product.productName.toLowerCase().includes(lowerCaseQuery);
//     });
//     setProducts(filteredUsers);
//   };

//   const addToCart = (index) => {
//     const storedUserData = JSON.parse(localStorage.getItem("user"));
//     setUserData(storedUserData);
//     const productToAdd = products[index];
//     if (!cart.find((item) => item.id === productToAdd._id)) {
//       const orderData = {
//         userId: storedUserData._id,
//         productId: productToAdd._id,
//         orderId: index.toString(),
//         quantity: cartValue,
//       };
//       create_order(orderData)
//         .then((res) => {
//           if (res.data.success === false) {
//             toast.error(res.data.message);
//           } else {
//             setCart([
//               ...cart,
//               {
//                 id: productToAdd._id,
//                 name: productToAdd.productName,
//                 price: productToAdd.productPrice,
//                 quantity: cartValue,
//                 orderId: res.data.order.orderId,
//               },
//             ]);
//             toast.success("Item added to cart!");
//           }
//         })
//         .catch((err) => {
//           toast.error("Server Error");
//           console.log(err.message);
//         });
//     } else {
//       toast.warning("Item is already in the cart!");
//     }
//   };

//   const addToFavorites = (index) => {
//     const productToAdd = products[index];
//     if (!favorites.find((item) => item.id === productToAdd._id)) {
//       setFavorites([...favorites, productToAdd]);
//       toast.success("Item added to favorites!");
//     } else {
//       toast.warning("Item is already in favorites!");
//     }
//   };

//   return (
//     <div style={{ fontFamily: 'Arial, sans-serif', padding: '30px', maxWidth: '1200px', margin: 'auto', backgroundColor: '#FAF3E3' }}>
//       <h1 style={{ textAlign: 'center', color: '#8B0000', fontWeight: 'bold', fontSize: '48px', marginBottom: '40px', fontFamily: 'Georgia, serif' }}>Find your bakery product</h1>

//       <div style={{ position: 'relative', marginBottom: '60px' }}>
//         <img
//           src="https://cdn.pixabay.com/photo/2017/05/23/22/33/birthday-2338813_1280.jpg"
//           alt="Introduction"
//           style={{ height: '500px', width: '100%', borderRadius: '10px', objectFit: 'cover', filter: 'brightness(0.5)' }}
//         />
//         <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center' }}>
//         <h2 style={{ color: '#FFE5B4', fontSize: '48px', marginBottom: '20px', fontWeight: '700', fontFamily: 'Playfair Display, serif' }}>Welcome to Our Bakery</h2>

//           <button
//             className="secondary-button"
//             style={{
//               padding: '15px 30px',
//               background: '#8B0000',
//               color: '#fff',
//               borderRadius: '25px',
//               cursor: 'pointer',
//               border: 'none',
//               fontSize: '18px',
//               boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
//               transition: 'background 0.3s ease'
//             }}
//             onMouseOver={(e) => e.target.style.background = '#a30000'}
//             onMouseOut={(e) => e.target.style.background = '#8B0000'}
//           >
//             Get Started <FiArrowRight />
//           </button>
//         </div>
//       </div>

//       <form className="d-flex me-2" onSubmit={handleSearchUsers} style={{ justifyContent: 'center', marginBottom: '40px' }}>
//         <input
//           className="form-control me-2"
//           type="text"
//           placeholder="Search Product..."
//           aria-label="Search"
//           value={searchQueryUsers}
//           onChange={(e) => setSearchQueryUsers(e.target.value)}
//           style={{
//             width: '400px',
//             padding: '15px',
//             marginRight: '10px',
//             borderRadius: '25px',
//             border: '1px solid #ccc',
//             fontSize: '16px'
//           }}
//         />
//         <button className="btn btn-outline-success" type="submit" style={{
//           padding: '15px 25px',
//           borderRadius: '25px',
//           border: '1px solid #FFD700',
//           backgroundColor: '#FFD700',
//           color: 'black',
//           fontSize: '16px',
//           cursor: 'pointer',
//           transition: 'background 0.3s ease'
//         }}
//         onMouseOver={(e) => e.target.style.background = '#FFC107'}
//         onMouseOut={(e) => e.target.style.background = '#FFD700'}
//         >Search</button>
//       </form>

//       <h2 style={{ textAlign: 'center', color: '#027148', fontWeight: 'bold', fontSize: '36px', marginBottom: '30px', fontFamily: 'Georgia, serif' }}>New Arrivals</h2>

//       <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', marginBottom: '60px' }}>
//         {products.map((product, index) => (
//           <div key={product._id} style={{
//             margin: '20px',
//             padding: '20px',
//             border: '1px solid #ddd',
//             borderRadius: '15px',
//             textAlign: 'center',
//             width: '280px',
//             boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
//             backgroundColor: '#fff',
//             position: 'relative',
//             transition: 'transform 0.3s ease, box-shadow 0.3s ease'
//           }}
//           onMouseOver={(e) => { e.currentTarget.style.transform = 'scale(1.05)'; e.currentTarget.style.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.2)'; }}
//           onMouseOut={(e) => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)'; }}
//           >
//             {product.isPremium && <span style={{
//               position: 'absolute',
//               top: '10px',
//               right: '10px',
//               backgroundColor: '#FFD700',
//               color: '#fff',
//               padding: '5px 10px',
//               borderRadius: '5px',
//               fontSize: '12px',
//               fontWeight: 'bold'
//             }}>Premium</span>}
//             <img src={product.productImageUrl} alt={product.productName} style={{
//               width: '100%',
//               height: '200px',
//               objectFit: 'cover',
//               borderRadius: '10px'
//             }} />
//             <h3 style={{ marginTop: '10px', color: '#333', fontSize: '20px', fontFamily: 'Georgia, serif' }}>{product.productName}</h3>
//             <h3 style={{ marginTop: '10px', color: '#333', fontSize: '18px', fontFamily: 'Georgia, serif' }}>NPR {product.productPrice}</h3>
//             <button onClick={() => addToCart(index)} style={{
//               padding: '10px',
//               background: '#8B0000',
//               color: '#fff',
//               borderRadius: '5px',
//               cursor: 'pointer',
//               border: 'none',
//               marginTop: '10px',
//               transition: 'background 0.3s ease'
//             }}
//             onMouseOver={(e) => e.target.style.background = '#a30000'}
//             onMouseOut={(e) => e.target.style.background = '#8B0000'}
//             >
//               Add to Cart
//             </button>
//             <button onClick={() => addToFavorites(index)} style={{
//               padding: '10px',
//               background: '#FF8C00', // Orange color for "Add to Favorites"
//               color: '#fff',
//               borderRadius: '5px',
//               cursor: 'pointer',
//               border: 'none',
//               marginTop: '10px',
//               marginLeft: '10px',
//               transition: 'background 0.3s ease'
//             }}
//             onMouseOver={(e) => e.target.style.background = '#FF7F50'}
//             onMouseOut={(e) => e.target.style.background = '#FF8C00'}
//             >
//               Add to Favorites
//             </button>
//           </div>
//         ))}
//       </div>

//       <div style={{ textAlign: 'center', marginBottom: '60px' }}>
//         <h2 style={{ color: '#8B0000', fontWeight: 'bold', fontSize: '36px', marginBottom: '20px', fontFamily: 'Georgia, serif' }}>Customer Testimonials</h2>
//         <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
//           <div style={{
//             maxWidth: '300px',
//             margin: '20px',
//             padding: '20px',
//             border: '1px solid #ddd',
//             borderRadius: '15px',
//             boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
//             backgroundColor: '#FFE5B4'
//           }}>
//             <p style={{ fontStyle: 'italic', color: 'black' }}>"The best bakery in town! Fresh and delicious every time."</p>
//             <h4 style={{ marginTop: '10px', color: '#333', fontWeight: 'bold' }}>- Omkar</h4>
//           </div>
//           <div style={{
//             maxWidth: '300px',
//             margin: '20px',
//             padding: '20px',
//             border: '1px solid #ddd',
//             borderRadius: '15px',
//             boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
//             backgroundColor: '#FFE5B4'
//           }}>
//             <p style={{ fontStyle: 'italic', color: 'black' }}>"A delightful experience every visit. Highly recommend!"</p>
//             <h4 style={{ marginTop: '10px', color: '#333', fontWeight: 'bold' }}>- Suman</h4>
//           </div>
//         </div>
//       </div>

//       <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', marginBottom: '60px' }}>
//         <div style={{
//           textAlign: 'left',
//           padding: '20px',
//           backgroundColor: '#FFC0CB',
//           borderRadius: '15px',
//           color: 'black'
//         }}>
//           <h3 style={{ fontWeight: 'bold', fontSize: '24px', marginBottom: '20px', fontFamily: 'Georgia, serif' }}>Our Services</h3>
//           <ul>
//             <li style={{ marginBottom: '10px' }}>Buy Bakery product</li>
//             <li style={{ marginBottom: '10px' }}>Bakery</li>
//             <li style={{ marginBottom: '10px' }}>Bakeryshop</li>
//           </ul>
//         </div>
//         <div style={{
//           textAlign: 'left',
//           padding: '20px',
//           backgroundColor: '#FFC0CB',
//           borderRadius: '15px',
//           color: 'black'
//         }}>
//           <h3 style={{ fontWeight: 'bold', fontSize: '24px', marginBottom: '20px', fontFamily: 'Georgia, serif' }}>Location</h3>
//           <ul>
//             <li style={{ marginBottom: '10px' }}>Visit Office</li>
//             <li style={{ marginBottom: '10px' }}>Shankmul Marg, New Baneshwor</li>
//             <li style={{ marginBottom: '10px' }}>Chabahil Marga, Maharajgunj</li>
//           </ul>
//         </div>
//         <div style={{
//           textAlign: 'left',
//           padding: '20px',
//           backgroundColor: '#FFC0CB',
//           borderRadius: '15px',
//           color: 'black'
//         }}>
//           <h3 style={{ fontWeight: 'bold', fontSize: '24px', marginBottom: '20px', fontFamily: 'Georgia, serif' }}>Contacts</h3>
//           <ul>
//             <li style={{ marginBottom: '10px' }}>Call any time</li>
//             <li style={{ marginBottom: '10px' }}>9814846609</li>
//             <li style={{ marginBottom: '10px' }}>Send Email</li>
//             <li style={{ marginBottom: '10px' }}>aashish@gmail.com</li>
//           </ul>
//         </div>
//       </div>

//       <footer style={{ backgroundColor: '#D2691E', color: '#fff', padding: '20px', borderRadius: '15px', textAlign: 'center' }}>
//         <p>&copy; 2024 Premium Bakery. All Rights Reserved.</p>
//         <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '10px' }}>
//           <a href="#" style={{ color: '#FFD700', textDecoration: 'none' }}>Facebook</a>
//           <a href="#" style={{ color: '#FFD700', textDecoration: 'none' }}>Twitter</a>
//           <a href="#" style={{ color: '#FFD700', textDecoration: 'none' }}>Instagram</a>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default HomePage;





import React, { useEffect, useState } from "react";
import { FiArrowRight } from "react-icons/fi";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { create_order, getAllProductsApi } from "../apis/Api";

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [searchQueryUsers, setSearchQueryUsers] = useState("");
  const { id } = useParams();
  const [cart, setCart] = useState([]);
  const [cartValue, setCartValue] = useState(1);
  const [userData, setUserData] = useState(null);
  const [favorites, setFavorites] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getAllProductsApi(id).then((res) => {
      setProducts(res.data.products);
    });
  }, [id]);

  const handleSearchUsers = (e) => {
    e.preventDefault();
    const filteredUsers = products.filter((product) => {
      const lowerCaseQuery = searchQueryUsers.toLowerCase();
      return product.productName.toLowerCase().includes(lowerCaseQuery);
    });
    setProducts(filteredUsers);
  };

  const isAuthenticated = () => {
    return !!localStorage.getItem("authToken"); // Replace with your actual authentication check
  };

  const addToCart = (index) => {
    if (!isAuthenticated()) {
      toast.info("Please log in to add items to your cart.");
      navigate("/login"); // Redirect to login if not authenticated
      return;
    }

    const storedUserData = JSON.parse(localStorage.getItem("user"));
    setUserData(storedUserData);
    const productToAdd = products[index];
    if (!cart.find((item) => item.id === productToAdd._id)) {
      const orderData = {
        userId: storedUserData._id,
        productId: productToAdd._id,
        orderId: index.toString(),
        quantity: cartValue,
      };
      create_order(orderData)
        .then((res) => {
          if (res.data.success === false) {
            toast.error(res.data.message);
          } else {
            setCart([
              ...cart,
              {
                id: productToAdd._id,
                name: productToAdd.productName,
                price: productToAdd.productPrice,
                quantity: cartValue,
                orderId: res.data.order.orderId,
              },
            ]);
            toast.success("Item added to cart!");
          }
        })
        .catch((err) => {
          toast.error("Server Error");
          console.log(err.message);
        });
    } else {
      toast.warning("Item is already in the cart!");
    }
  };

  const addToFavorites = (index) => {
    if (!isAuthenticated()) {
      toast.info("Please log in to add items to your favorites.");
      navigate("/login"); // Redirect to login if not authenticated
      return;
    }

    const productToAdd = products[index];
    if (!favorites.find((item) => item.id === productToAdd._id)) {
      setFavorites([...favorites, productToAdd]);
      toast.success("Item added to favorites!");
    } else {
      toast.warning("Item is already in favorites!");
    }
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '30px', maxWidth: '1200px', margin: 'auto', backgroundColor: '#FAF3E3' }}>
      <h1 style={{ textAlign: 'center', color: '#8B0000', fontWeight: 'bold', fontSize: '48px', marginBottom: '40px', fontFamily: 'Georgia, serif' }}>Find your bakery product</h1>

      <div style={{ position: 'relative', marginBottom: '60px' }}>
        <img
          src="https://cdn.pixabay.com/photo/2017/05/23/22/33/birthday-2338813_1280.jpg"
          alt="Introduction"
          style={{ height: '500px', width: '100%', borderRadius: '10px', objectFit: 'cover', filter: 'brightness(0.5)' }}
        />
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center' }}>
          <h2 style={{ color: '#FFE5B4', fontSize: '48px', marginBottom: '20px', fontWeight: '700', fontFamily: 'Playfair Display, serif' }}>Welcome to Our Bakery</h2>
          <button
            className="secondary-button"
            style={{
              padding: '15px 30px',
              background: '#8B0000',
              color: '#fff',
              borderRadius: '25px',
              cursor: 'pointer',
              border: 'none',
              fontSize: '18px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
              transition: 'background 0.3s ease'
            }}
            onMouseOver={(e) => e.target.style.background = '#a30000'}
            onMouseOut={(e) => e.target.style.background = '#8B0000'}
          >
            Get Started <FiArrowRight />
          </button>
        </div>
      </div>

      <form className="d-flex me-2" onSubmit={handleSearchUsers} style={{ justifyContent: 'center', marginBottom: '40px' }}>
        <input
          className="form-control me-2"
          type="text"
          placeholder="Search Product..."
          aria-label="Search"
          value={searchQueryUsers}
          onChange={(e) => setSearchQueryUsers(e.target.value)}
          style={{
            width: '400px',
            padding: '15px',
            marginRight: '10px',
            borderRadius: '25px',
            border: '1px solid #ccc',
            fontSize: '16px'
          }}
        />
        <button className="btn btn-outline-success" type="submit" style={{
          padding: '15px 25px',
          borderRadius: '25px',
          border: '1px solid #FFD700',
          backgroundColor: '#FFD700',
          color: 'black',
          fontSize: '16px',
          cursor: 'pointer',
          transition: 'background 0.3s ease'
        }}
        onMouseOver={(e) => e.target.style.background = '#FFC107'}
        onMouseOut={(e) => e.target.style.background = '#FFD700'}
        >Search</button>
      </form>

      <h2 style={{ textAlign: 'center', color: '#027148', fontWeight: 'bold', fontSize: '36px', marginBottom: '30px', fontFamily: 'Georgia, serif' }}>New Arrivals</h2>

      <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', marginBottom: '60px' }}>
        {products.map((product, index) => (
          <div key={product._id} style={{
            margin: '20px',
            padding: '20px',
            border: '1px solid #ddd',
            borderRadius: '15px',
            textAlign: 'center',
            width: '280px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            backgroundColor: '#fff',
            position: 'relative',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease'
          }}
          onMouseOver={(e) => { e.currentTarget.style.transform = 'scale(1.05)'; e.currentTarget.style.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.2)'; }}
          onMouseOut={(e) => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)'; }}
          >
            {product.isPremium && <span style={{
              position: 'absolute',
              top: '10px',
              right: '10px',
              backgroundColor: '#FFD700',
              color: '#fff',
              padding: '5px 10px',
              borderRadius: '5px',
              fontSize: '12px',
              fontWeight: 'bold'
            }}>Premium</span>}
            <img src={product.productImageUrl} alt={product.productName} style={{
              width: '100%',
              height: '200px',
              objectFit: 'cover',
              borderRadius: '10px'
            }} />
            <h3 style={{ marginTop: '10px', color: '#333', fontSize: '20px', fontFamily: 'Georgia, serif' }}>{product.productName}</h3>
            <h3 style={{ marginTop: '10px', color: '#333', fontSize: '18px', fontFamily: 'Georgia, serif' }}>NPR {product.productPrice}</h3>
            <button onClick={() => addToCart(index)} style={{
              padding: '10px',
              background: '#8B0000',
              color: '#fff',
              borderRadius: '5px',
              cursor: 'pointer',
              border: 'none',
              marginTop: '10px',
              transition: 'background 0.3s ease'
            }}
            onMouseOver={(e) => e.target.style.background = '#a30000'}
            onMouseOut={(e) => e.target.style.background = '#8B0000'}
            >
              Add to Cart
            </button>
            <button onClick={() => addToFavorites(index)} style={{
              padding: '10px',
              background: '#FF8C00', // Orange color for "Add to Favorites"
              color: '#fff',
              borderRadius: '5px',
              cursor: 'pointer',
              border: 'none',
              marginTop: '10px',
              marginLeft: '10px',
              transition: 'background 0.3s ease'
            }}
            onMouseOver={(e) => e.target.style.background = '#FF7F50'}
            onMouseOut={(e) => e.target.style.background = '#FF8C00'}
            >
              Add to Favorites
            </button>
          </div>
        ))}
      </div>

      <div style={{ textAlign: 'center', marginBottom: '60px' }}>
        <h2 style={{ color: '#8B0000', fontWeight: 'bold', fontSize: '36px', marginBottom: '20px', fontFamily: 'Georgia, serif' }}>Customer Testimonials</h2>
        <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
          <div style={{
            maxWidth: '300px',
            margin: '20px',
            padding: '20px',
            border: '1px solid #ddd',
            borderRadius: '15px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            backgroundColor: '#FFE5B4'
          }}>
            <p style={{ fontStyle: 'italic', color: 'black' }}>"The best bakery in town! Fresh and delicious every time."</p>
            <h4 style={{ marginTop: '10px', color: '#333', fontWeight: 'bold' }}>- Omkar</h4>
          </div>
          <div style={{
            maxWidth: '300px',
            margin: '20px',
            padding: '20px',
            border: '1px solid #ddd',
            borderRadius: '15px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            backgroundColor: '#FFE5B4'
          }}>
            <p style={{ fontStyle: 'italic', color: 'black' }}>"A delightful experience every visit. Highly recommend!"</p>
            <h4 style={{ marginTop: '10px', color: '#333', fontWeight: 'bold' }}>- Suman</h4>
          </div>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', marginBottom: '60px' }}>
        <div style={{
          textAlign: 'left',
          padding: '20px',
          backgroundColor: '#FFC0CB',
          borderRadius: '15px',
          color: 'black'
        }}>
          <h3 style={{ fontWeight: 'bold', fontSize: '24px', marginBottom: '20px', fontFamily: 'Georgia, serif' }}>Our Services</h3>
          <ul>
            <li style={{ marginBottom: '10px' }}>Buy Bakery product</li>
            <li style={{ marginBottom: '10px' }}>Bakery</li>
            <li style={{ marginBottom: '10px' }}>Bakeryshop</li>
          </ul>
        </div>
        <div style={{
          textAlign: 'left',
          padding: '20px',
          backgroundColor: '#FFC0CB',
          borderRadius: '15px',
          color: 'black'
        }}>
          <h3 style={{ fontWeight: 'bold', fontSize: '24px', marginBottom: '20px', fontFamily: 'Georgia, serif' }}>Location</h3>
          <ul>
            <li style={{ marginBottom: '10px' }}>Visit Office</li>
            <li style={{ marginBottom: '10px' }}>Shankmul Marg, New Baneshwor</li>
            <li style={{ marginBottom: '10px' }}>Chabahil Marga, Maharajgunj</li>
          </ul>
        </div>
        <div style={{
          textAlign: 'left',
          padding: '20px',
          backgroundColor: '#FFC0CB',
          borderRadius: '15px',
          color: 'black'
        }}>
          <h3 style={{ fontWeight: 'bold', fontSize: '24px', marginBottom: '20px', fontFamily: 'Georgia, serif' }}>Contacts</h3>
          <ul>
            <li style={{ marginBottom: '10px' }}>Call any time</li>
            <li style={{ marginBottom: '10px' }}>9814846609</li>
            <li style={{ marginBottom: '10px' }}>Send Email</li>
            <li style={{ marginBottom: '10px' }}>aashish@gmail.com</li>
          </ul>
        </div>
      </div>

      <footer style={{ backgroundColor: '#D2691E', color: '#fff', padding: '20px', borderRadius: '15px', textAlign: 'center' }}>
        <p>&copy; 2024 Premium Bakery. All Rights Reserved.</p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '10px' }}>
          <a href="#" style={{ color: '#FFD700', textDecoration: 'none' }}>Facebook</a>
          <a href="#" style={{ color: '#FFD700', textDecoration: 'none' }}>Twitter</a>
          <a href="#" style={{ color: '#FFD700', textDecoration: 'none' }}>Instagram</a>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
