// This file is part of Prusa-Connect-Local
// Copyright (C) 2018-2019 Prusa Research s.r.o. - www.prusa3d.com
// SPDX-License-Identifier: GPL-3.0-or-later

import { h } from "preact";
import "./style.scss";

interface P {
  title: string;
  children?: any;
}

const Title: preact.FunctionalComponent<P> = ({ title, children }) => {
  return (
    <div class="box has-background-black is-paddingless prusa-line">
      <div class="columns is-centered">
        <div class="column title is-size-3 is-size-4-desktop has-text-grey botton-paddingless">
          {title}
          {children && children}
        </div>
        <div class="column has-text-right title is-size-2 is-size-4-desktop prusa-text-orange botton-paddingless">
          {process.env.PRINTER}
        </div>
      </div>
    </div>
  );
};

export default Title;
