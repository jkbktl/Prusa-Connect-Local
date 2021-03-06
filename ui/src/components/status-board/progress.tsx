// This file is part of Prusa-Connect-Local
// Copyright (C) 2018-2019 Prusa Research s.r.o. - www.prusa3d.com
// SPDX-License-Identifier: GPL-3.0-or-later

import { h, Fragment } from "preact";

interface P {
  readonly project_name: string;
  readonly progress: number;
}

const StatusProgress: preact.FunctionalComponent<P> = props => {
  return (
    <Fragment>
      <p class="title is-size-2 is-size-5-desktop is-marginless prusa-break-word">
        {props.project_name}
      </p>
      <progress
        class="progress is-success is-medium is-marginless"
        value={`${props.progress}`}
        max="100"
      />
      <div class="title has-text-centered is-size-1 is-size-3-desktop">
        {`${props.progress}%`}
      </div>
    </Fragment>
  );
};

export default StatusProgress;
