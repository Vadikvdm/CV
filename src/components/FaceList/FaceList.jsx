import React from 'react';
import ColumnContact from './columns/ColumnContact';
import ColumnDescription from './columns/ColumnDescription';
import style from './Facelist.module.scss';

export default function FaceList() {
  return (
    <div className={style.mainList}>
      <ColumnDescription />
      <ColumnContact />
    </div>
  )
}
