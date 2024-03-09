import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { ReactSVG } from 'react-svg';

import { LazyLoadImage } from 'react-lazy-load-image-component';
import { CartContext } from '../../storage/cartContext';
import { PriceContext } from '../../storage/fullPriceСontext';
import { FavouritesContext } from '../../storage/favoritesContext';

import { Phone } from '../../types/phone';

import 'react-lazy-load-image-component/src/effects/blur.css';
import './productcard.scss';

type Props = {
  product: Phone ;
};

export const ProductCard: React.FC<Props> = ({ product }) => {
  const { isInCart, handleCart } = useContext(CartContext);
  const { isInFavorites, handleFavorites } = useContext(FavouritesContext);
  const isOnlyFullPrice = useContext(PriceContext) || false;

  return (
    <div
      className="product-card"
    >
      <Link
        to={`/${product.category}/${product.phoneId}`}
        onClick={() => window.scrollTo({
          top: 0,
          behavior: 'smooth',
        })}
      >
        <div className="product-card__image-container">
          <LazyLoadImage
            src={product.image}
            alt={product.name}
            className="product-card__image"
            wrapperClassName="product-card__image"
            effect="blur"
            placeholderSrc="img/placeholder.png"
          />
        </div>

        <p className="product-card__title">{product.name}</p>
      </Link>

      <div className="product-card__price-container">
        <span className="product-card__price-new">
          {isOnlyFullPrice
            ? `$${product.fullPrice}`
            : `$${product.price}`}
        </span>

        {!isOnlyFullPrice && (
          <span className="product-card__price-old">
            {`$${product.fullPrice}`}
          </span>
        )}
      </div>

      <div className="product-card__underline" />

      <div className="product-card__description-container">
        <div className="product-card__description-item">
          <span className="product-card__description-title">Screen</span>
          <span className="product-card__description-detail">
            {product.screen}
          </span>
        </div>

        <div className="product-card__description-item">
          <span className="product-card__description-title">Capacity</span>
          <span className="product-card__description-detail">
            {product.capacity}
          </span>
        </div>

        <div className="product-card__description-item">
          <span className="product-card__description-title">RAM</span>
          <span className="product-card__description-detail">
            {product.ram}
          </span>
        </div>
      </div>

      <div className="product-card__buttons">
        <button
          type="button"
          className={classNames('product-card__button-add-cart', {
            'product-card__button-add-cart--added': isInCart(product),
          })}
          onClick={() => handleCart(product)}
        >
          {isInCart(product) ? 'Added to cart' : 'Add to cart'}
        </button>

        <button
          type="button"
          className={classNames('product-card__button-favorites', {
            'product-card__button-favorites--added': isInFavorites(product),
          })}
          data-cy="addToFavorite"
          onClick={() => handleFavorites(product)}
        >
          {isInFavorites(product)
            ? <ReactSVG src="img/icons/FavouritesFilled.svg" />
            : <ReactSVG src="img/icons/Favourites.svg" />}
        </button>
      </div>
    </div>
  );
};
