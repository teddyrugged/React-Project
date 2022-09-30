import React from 'react';
import './BusinessCard.css';
import { Title } from'../../components/BusinessCard/Headp/index';
import Card from '../../components/BusinessCard/Card/card';
import Button from '../../components/BusinessCard/CardButton/Button';
import { SocialMedia } from '../../components/BusinessCard/SocialMedia';

const BusinessCard = () => {
  return (
    <>
    <div class='row'>
      <div class="col-sm-6">
        <div class="card">
          <div class="card-body">
            <div >
              <Title/>
              <Button />
              <Card />
              <SocialMedia />
            </div>
          </div>
        </div>
      </div>
      <div class="col-sm-6">
        <div class="card">
          <div class="card-body">
            <Title/>
            <Button />
            <Card />
            < SocialMedia />
          </div>
        </div>
      </div>
      <div class="col-sm-6">
        <div class="card">
          <div class="card-body">
            <Title/>
            <Button />
            <Card />
            < SocialMedia />
          </div>
        </div>
      </div>
      <div class="col-sm-6">
        <div class="card">
          <div class="card-body">
            <Title/>
            <Button />
            <Card />
            < SocialMedia />
          </div>
        </div>
      </div>
    </div>

    </>
  )
}

export default BusinessCard