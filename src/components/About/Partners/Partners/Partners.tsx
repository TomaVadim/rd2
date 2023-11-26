import { useTranslation } from "react-i18next";

import { PartnersSlider } from "components/About/Partners/PartnersSlider/PartnersSlider";
import { SectionContainer } from "components/commonComponents/SectionContainer/SectionContainer";
import { SectionHeader } from "components/commonComponents/SectionHeader/SectionHeader";
import { partners } from "components/About/Partners/Partners/partnersList";

export const Partners = () => {
  const { t } = useTranslation();

  return (
    <SectionContainer>
      <SectionHeader title={t("partners_block.title")}>
        {t("partners_block.about")}
      </SectionHeader>

      <PartnersSlider partnersList={partners} />
    </SectionContainer>
  );
};
