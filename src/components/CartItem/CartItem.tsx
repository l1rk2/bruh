import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ReactSVG } from 'react-svg';

import { LazyLoadImage } from 'react-lazy-load-image-component';
import { CartContext } from '../../storage/cartContext';
import { CartItemType } from '../../types/cartItemType';

import './cartItem.scss';
import 'react-lazy-load-image-component/src/effects/blur.css';

type Props = {
  item: CartItemType;
};

export const CartItem: React.FC<Props> = ({ item }) => {
  const { setCart } = useContext(CartContext);

  const isMinusDisabled = item.quantity === 1;
  const isPlusDisabled = item.quantity === 10;

  const handleDelete = () => {
    setCart((prev) => prev.filter((cartItem) => cartItem.id !== item.id));
  };

  const handleQuantity = (plus : boolean) => {
    setCart((prev) => prev.map((cartItem) => {
      return cartItem.id === item.id
        ? { ...cartItem, quantity: plus ? cartItem.quantity + 1 : cartItem.quantity - 1 }
        : cartItem;
    }));
  };

  return (
    <div className="cart-item">
      <div
        className="cart-item__close"
        onClick={handleDelete}
        data-cy="cartDeleteButton"
        aria-hidden
      >
        <ReactSVG src="img/icons/Close.svg" />
      </div>

      <Link
        to={`/${item.product.category}/${item.product.itemId}`}
        style={{ display: 'block' }}
      >
        <div className="cart-item__preview">
          <LazyLoadImage
            src={item.product.image}
            alt={item.product.name}
            className="cart-item__preview-img"
            wrapperClassName="cart-item__preview-img"
            placeholderSrc="img/placeholder.png"
            effect="blur"
          />
        </div>
      </Link>

      <Link
        to={`/${item.product.category}/${item.product.itemId}`}
        style={{ display: 'block', flexGrow: 1 }}
      >
        <p className="cart-item__title">{item.product.name}</p>
      </Link>

      <div className="cart-item__quantity-box">
        <button
          type="button"
          className="cart-item__quantity-button"
          onClick={() => handleQuantity(false)}
          disabled={isMinusDisabled}
        >
          <ReactSVG src="img/icons/Minus.svg" />
        </button>

        <span className="cart-item__quantity">{item.quantity}</span>

        <button
          type="button"
          className="cart-item__quantity-button"
          onClick={() => handleQuantity(true)}
          disabled={isPlusDisabled}
        >
          <ReactSVG src="img/icons/Plus.svg" />
        </button>

      </div>

      <span className="cart-item__price">{`$${item.product.price}`}</span>
    </div>
  );
};
