import React, { useState, useEffect } from 'react';
// useDispatch da se akcija dispacuje
import { useDispatch, useSelector } from 'react-redux';
// importuje se addProduct za dodavanje prod-a
import { addProductStart, fetchProductsStart, deleteProductStart } from './../../redux/Products/products.actions';
import { signOutUserStart } from './../../redux/User/user.actions';
import Modal from './../../components/Modal';
import './style.scss';
import FormSelect from './../../components/forms/FormSelect';
import LoadMore from './../../components/LoadMore';
import { Link } from 'react-router-dom';



// ovde uizmam producte i store-a
const mapState = ({ productsData }) => ({
    products: productsData.products
});


const Admin = props => {
    // useSelector daje pristup proizvodima iz redux store
    const { products } = useSelector(mapState)
    // inicijalizovanje dispatch-a
    const dispatch = useDispatch();
    // ovo je local state i dostpuna je formi
    const [hideModal, setHideModal] = useState(true);
    const [productCategory, setProductCategory] = useState('');
    const [productName, setProductName] = useState('');
    const [productThumbnail, setProductThumbnail] = useState('');
    const [productMP, setProductMP] = useState('');
    const [productVP, setProductVP] = useState('');
    const [productBrend, setProductBrend] = useState('');

    const { data, queryDoc, isLastPage } = products;

    useEffect(() => {
        // cim se komponenta render odmah fetchuje producte iz firebase
        dispatch(
            fetchProductsStart()
        );
    }, []);



    const toggleModal = () => setHideModal(!hideModal);

    const configModal = {
        hideModal,
        toggleModal
    };

    const resetForm = () => {
        setHideModal(true);
        setProductCategory('');
        setProductBrend('');
        setProductName('');
        setProductThumbnail('');
        setProductMP('');
        setProductVP('');
    }


    // funkcija koja se zove na submit form-e
    const handleSubmit = e => {
        e.preventDefault();
        // ovde se dispatcuje cela funkcija iz action
        // payload je local state - a local state je ono sto unesemo kroz web
        dispatch(
            addProductStart({
                productCategory,
                productBrend,
                productName,
                productThumbnail,
                productMP,
                productVP
            })
        );
        resetForm();
    };

    const handleLoadMore = () => {
        dispatch(
            fetchProductsStart({
                startAfterDoc: queryDoc,
                persistProducts: data
            })
        );
    }

    const configLoadMore = {
        onLoadMoreEvent: handleLoadMore
    };

    const signOut = () => {
        dispatch(signOutUserStart());
    };


    return (
        <div className="admin-container max-width">
            <div className="admin-buttons">
                <div className="admin-logo-name">
                    <div className="admin-logo"></div>
                    <div className="admin-name">
                        <h1>Jugometal</h1>
                    </div>
                </div>

                <Link to='/'>Pocetna</Link>
                <Link to='/' onClick={() => signOut()}>Sign Out</Link>

                <button onClick={() => toggleModal()}> Dodaj nov proizvod</button>
            </div>

            <div className="products">
                <h2>Upravljajte proizvodima</h2>
                <div className="products-list">

                    {(Array.isArray(data) && data.length > 0) && data.map((product, index) => {
                        const {
                            productName,
                            productThumbnail,
                            documentID,
                            productCategory,
                            productBrend,
                            productMP,
                            productVP,
                        } = product

                        return (
                            <div key={index} className="product">
                                <div className="product-img">
                                    <img src={productThumbnail} className="thumb" />
                                </div>

                                <div className="product-desc">
                                    <h3>{productName}</h3>
                                    <p className="product-price">Cena MP: <span className='cena'>  {productMP} din</span></p>
                                    <p className="product-price">Cena VP: <span className='cena'>  {productVP} din</span></p>
                                    <p className='product-brend'>{productBrend}</p>
                                    <p className="product-cat">{productCategory}</p>
                                    <button
                                        onClick={() => dispatch(deleteProductStart(documentID))}
                                        type='submit' className='delete'>Delete</button>
                                </div>
                            </div>
                        )
                    })}
                </div>

            </div>

            {isLastPage && (
                <LoadMore {...configLoadMore} />
            )}



            {/* ---------- SVE JE OVO U MODALU ---------- */}
            <Modal {...configModal}>
                <div className="addNewProductForm">
                    <form onSubmit={handleSubmit}>
                        <h2 style={{ marginBottom: '1rem' }}>
                            Dodajte nov proizvod
                        </h2>

                        <FormSelect
                            label="Kategorije"
                            options={[
                                {
                                    value: "Izaberite kategoriju",
                                    name: "Izaberite kategoriju"
                                },
                                {
                                    value: "Traktorski Delovi",
                                    name: "Traktorski Delovi"
                                }, {
                                    value: "Delovi za polj. masine",
                                    name: "Delovi za polj. masine"
                                }, {
                                    value: "Ulja i maziva",
                                    name: "Ulja i maziva"
                                }, {
                                    value: "Gume",
                                    name: "Gume"
                                }, {
                                    value: "Filteri",
                                    name: "Filteri"
                                }, {
                                    value: "Kardani",
                                    name: "Kardani"
                                }, {
                                    value: "Akumulatori",
                                    name: "Akumulatori"
                                },
                                {
                                    value: "Razno",
                                    name: "Razno"
                                },
                            ]}
                            onChange={e => setProductCategory(e.target.value)}
                        />


                        <div className="textbox">
                            <h5>Ime proizvoda</h5>
                            <input label="Name"
                                type="text"
                                value={productName}
                                onChange={e => setProductName(e.target.value)} />
                        </div>


                        <div className="textbox">
                            <h5>Slika proizvoda</h5>
                            <input label="Main image URL"
                                type="file"
                                value={productThumbnail}
                                onChange={e => setProductThumbnail(e.target.value)} />
                        </div>


                        <div className="textbox">
                            <h5>Cena proizvoda MP</h5>
                            <input label="Price"
                                type="text"
                                value={productMP}
                                onChange={e => setProductMP(e.target.value)} />
                        </div>


                        <div className="textbox">
                            <h5>Cena proizvoda VP</h5>
                            <input label="Price"
                                type="text"
                                value={productVP}
                                onChange={e => setProductVP(e.target.value)} />
                        </div>

                        <div className="textbox">
                            <h5>Brend</h5>
                            <input label="Brend"
                                type="text"
                                value={productBrend}
                                onChange={e => setProductBrend(e.target.value)} />
                        </div>

                        <br />

                        <button className="submit" type="submit"> Dodajte proizvod</button>

                    </form>
                </div>

            </Modal>

            {/* ----------------------------------------------- */}

            {/* <div className="manage-pro">
                <table border='0' cellPading='0' cellSpacing='0'>
                    <tbody>
                        <tr>
                            <th>
                                <h1>Upravljate proizvodima</h1>
                            </th>
                        </tr>
                        <tr>
                            <td>
                                <table border='0' cellPading='10' cellSpacing='0'>
                                    <tbody>
                                        {(Array.isArray(data) && data.length > 0) && data.map((product, index) => {
                                            const {
                                                productName,
                                                productThumbnail,
                                                productPrice, documentID
                                            } = product


                                            return (
                                                <tr key={index}>
                                                    <td>
                                                        <img src={productThumbnail} className="thumb" />
                                                    </td>
                                                    <td>
                                                        {productName}
                                                    </td>
                                                    <td>
                                                        ${productPrice}
                                                    </td>
                                                    <td>
                                                        <button
                                                            onClick={() => dispatch(deleteProductStart(documentID))}
                                                            type='submit' className='submit'>Delete</button>
                                                    </td>
                                                </tr>
                                            )
                                        })}
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                        <tr>
                            <td>

                            </td>
                        </tr>
                        <tr>
                            <td>
                                <table border='0' cellPadding='10px' cellSpacing='0'>
                                    {isLastPage && (
                                        <LoadMore {...configLoadMore} />
                                    )}
                                </table>

                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>*/}

        </div>
    );
}


export default Admin;
