// This file is part of Prusa-Connect-Local
// Copyright (C) 2018-2019 Prusa Research s.r.o. - www.prusa3d.com
// SPDX-License-Identifier: GPL-3.0-or-later

import { h, render } from "preact";
import "./i18n";
import "./style/index.scss";
import App from "./components/app";

export default App;

render(<App />, document.body);
