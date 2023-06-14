import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepButton from "@mui/material/StepButton";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { WtextField } from "../whiteTextField";
import { AutoCompleteWhite } from "../autoCompleteWhite";
import TimeComponent from "../timePicker";
import {
  Divider,
  FormControl,
  FormGroup,
  FormHelperText,
  MobileStepper,
  StepIcon,
  useTheme,
} from "@mui/material";
import FormControlLabelCheckbox from "../formControlLabel";
import OpeningHors from "../openingHours/indext";
import styled from "@emotion/styled";
import { BlockCardBlack } from "../blockCards";
import { BodyParagraph, TitleCard } from "../Typography";
import logo from "../../../images/logoGrizzlies.png";
import { ButtonPrimary } from "../buttons";
import CircleIcon from "@mui/icons-material/Circle";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";

const steps = [
  "Dados Pessoais",
  "Dados do Estabelecimento",
  "Acesso a Plataforma",
];

export default function StepperRegister() {
  const theme = useTheme();

  const [name, setName] = React.useState<string>("");

  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState<{
    [k: number]: boolean;
  }>({});

  const totalSteps = () => {
    return steps.length;
  };

  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? // It's the last step, but not all steps have been completed,
          // find the first step that has been completed
          steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1;
    setActiveStep(newActiveStep);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStep = (step: number) => () => {
    setActiveStep(step);
  };

  const handleComplete = () => {
    const newCompleted = completed;
    newCompleted[activeStep] = true;
    setCompleted(newCompleted);
    handleNext();
  };

  const CustomStepButton = styled(StepButton)({
    "& .MuiSvgIcon-root.MuiSvgIcon-fontSizeMedium.MuiStepIcon-root.Mui-active.css-1u4zpwo-MuiSvgIcon-root-MuiStepIcon-root":
      {
        color: "#00cfc8",
      },
    "& .MuiSvgIcon-root.MuiSvgIcon-fontSizeMedium.MuiStepIcon-root.Mui-completed.css-1u4zpwo-MuiSvgIcon-root-MuiStepIcon-root":
      {
        color: "#00cfc8",
      },
  });

  const CustomStepper = styled(Stepper)`
    @media screen and (max-width: 900px) {
      display: none;
    }
  `;

  const ButtonArea = styled(Box)`
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    @media screen and (max-width: 900px) {
      display: none;
    }
  `;

  const CustomMobileStepper = styled(MobileStepper)`
    display: none;
    @media screen and (max-width: 900px) {
      display: flex;
      background-color: #494e5b;
      max-width: 400;
      flex-grow: 1;
    }

    .MuiMobileStepper-progress:active > .MuiMobileStepper-progressInner {
      background-color: red;
    }
  `;

  const LogoMobile = styled.img`
    display: none;
    @media screen and (max-width: 900px) {
      display: flex;
    }
  `;

  const LogoDesktop = styled.img`
    @media screen and (max-width: 900px) {
      display: none;
    }
  `;

  const AreaMobile = styled(Box)`
    display: flex;
    flex-direction: column;
  `;

  return (
    <Box
      sx={{
        width: "100%",
      }}
    >
      <CustomStepper
        sx={{ margin: "3% 0 5% 0" }}
        nonLinear
        activeStep={activeStep}
      >
        {steps.map((label, index) => (
          <Step key={label} completed={completed[index]}>
            <CustomStepButton onClick={handleStep(index)}>
              <p style={{ color: "white" }}>{label}</p>
            </CustomStepButton>
          </Step>
        ))}
      </CustomStepper>
      <>
        {allStepsCompleted() ? (
          <BlockCardBlack>
            <BodyParagraph>
              Cadastro Finalizado, clique no botão abaixo para acessar seu
              Painel de controle
            </BodyParagraph>
            <ButtonPrimary sx={{ margin: "5% 0 5% 0" }} variant="outlined">
              Painel de Controle
            </ButtonPrimary>
          </BlockCardBlack>
        ) : (
          <>
            {activeStep === 0 ? (
              <AreaMobile>
                <LogoMobile
                  style={{ alignSelf: "center" }}
                  src={logo.src}
                  width="50%"
                />
                <BlockCardBlack>
                  <LogoDesktop
                    style={{ alignSelf: "center" }}
                    src={logo.src}
                    width="30%"
                  />
                  <TitleCard>Informações Pessoais</TitleCard>
                  <WtextField setProp={setName} labelText="Nome Completo" />
                  <WtextField
                    setProp={setName}
                    labelText="Data de Nascimento"
                  />
                  <WtextField setProp={setName} labelText="CPF" />
                  <WtextField setProp={setName} labelText="Celular com DD" />
                </BlockCardBlack>
              </AreaMobile>
            ) : activeStep === 1 ? (
              <AreaMobile>
                <LogoMobile
                  style={{ alignSelf: "center" }}
                  src={logo.src}
                  width="50%"
                />
                <BlockCardBlack>
                  <TitleCard>Informações do Estabelecimento</TitleCard>
                  <WtextField
                    setProp={setName}
                    labelText="Nome do Estabelecimento"
                  />
                  <WtextField
                    setProp={setName}
                    labelText="Endereço do Estabelecimento"
                  />
                  <AutoCompleteWhite labelProps="Segmento de Trabalho" />
                </BlockCardBlack>
                <OpeningHors />
              </AreaMobile>
            ) : activeStep === 2 ? (
              <AreaMobile>
                <LogoMobile
                  style={{ alignSelf: "center" }}
                  src={logo.src}
                  width="50%"
                />
                <BlockCardBlack>
                  <TitleCard>Criação de Credenciais</TitleCard>
                  <WtextField setProp={setName} labelText="Nome de usuario" />
                  <WtextField setProp={setName} labelText="Senha" />
                  <Divider color="white" sx={{ margin: "3% 0 3% 0" }} />
                  <BodyParagraph>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s,
                  </BodyParagraph>
                  <FormControlLabelCheckbox labelProps="Concordo com os termos" />
                </BlockCardBlack>
              </AreaMobile>
            ) : (
              <></>
            )}
            <ButtonArea sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
              <ButtonPrimary
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
              >
                Voltar
              </ButtonPrimary>
              {activeStep !== steps.length &&
                (completed[activeStep] ? (
                  <ButtonPrimary
                    variant="outlined"
                    onClick={handleNext}
                    sx={{ mr: 1 }}
                  >
                    Próximo
                  </ButtonPrimary>
                ) : (
                  <ButtonPrimary variant="outlined" onClick={handleComplete}>
                    {completedSteps() === totalSteps() - 1
                      ? "Finalizar"
                      : "Proximo"}
                  </ButtonPrimary>
                ))}
            </ButtonArea>
          </>
        )}
      </>
      <CustomMobileStepper
        variant="progress"
        steps={4}
        position="bottom"
        activeStep={activeStep}
        nextButton={
          <ButtonPrimary
            disabled={activeStep === 3}
            size="small"
            onClick={handleComplete}
          >
            {completedSteps() === totalSteps() - 1 ? "Finalizar" : "Proximo"}
            {theme.direction === "rtl" ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </ButtonPrimary>
        }
        backButton={
          <ButtonPrimary
            size="small"
            onClick={handleBack}
            disabled={activeStep === 0 || activeStep === 3}
          >
            {theme.direction === "rtl" ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Voltar
          </ButtonPrimary>
        }
      />
    </Box>
  );
}
