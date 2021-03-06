// This file is part of Prusa-Connect-Local
// Copyright (C) 2018-2019 Prusa Research s.r.o. - www.prusa3d.com
// SPDX-License-Identifier: GPL-3.0-or-later

import { h } from "preact";
import { useTranslation } from "react-i18next";

export interface FileProperties {
  printing_time: string;
  material: string;
  leyer_height: number;
}

interface Props extends FileProperties {
  isVertical: boolean;
}

export const ProjectProperties: preact.FunctionalComponent<Props> = props => {
  const { isVertical, printing_time, material, leyer_height } = props;
  const properties_class = isVertical
    ? "column is-full has-text-grey"
    : "column has-text-grey";

  const { t, i18n, ready } = useTranslation(null, { useSuspense: false });
  return ready ? (
    <div class={isVertical ? "columns is-multiline is-mobile" : "columns"}>
      {printing_time && (
        <div class={properties_class}>
          <img src={require("../../assets/time_color.svg")} width="15" />
          <span class="is-size-3 is-size-6-desktop">
            {" " + t("prop.pnt-time")}
          </span>
          <span class="has-text-white has-text-weight-bold is-size-3 is-size-6-desktop">
            {" "}
            {printing_time}
          </span>
        </div>
      )}
      {material && (
        <div class={properties_class}>
          <img src={require("../../assets/status_filament.svg")} width="15" />
          <span class="is-size-3 is-size-6-desktop">
            {" " + t("prop.material")}
          </span>
          <span class="has-text-white has-text-weight-bold is-size-3 is-size-6-desktop">
            {" "}
            {material}
          </span>
        </div>
      )}
      {leyer_height && (
        <div class={properties_class}>
          <img src={require("../../assets/quality_medium.svg")} width="15" />
          <span class="is-size-3 is-size-6-desktop">
            {" " + t("prop.layer-ht")}
          </span>
          <span class="has-text-white has-text-weight-bold is-size-3 is-size-6-desktop">
            {" "}
            {leyer_height} ml
          </span>
        </div>
      )}
    </div>
  ) : (
    <div />
  );
};
