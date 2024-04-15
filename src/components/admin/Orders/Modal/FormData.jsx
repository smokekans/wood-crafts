import { Form, useFormik } from "formik";
import React, { useState } from "react";
import CustomerData from "./CustomerData";
import Products from "./Products";
import { Grid, Button, Box, Typography, Divider, Input } from "@mui/material";
import PaymentAndDelivery from "./PaymentAndDelivery";

import StatusSelect from "./StatusSelect";
import CloseIcon from "@mui/icons-material/Close";
import LocalPrintshopIcon from "@mui/icons-material/LocalPrintshop";

function FormData({ row, handleClose }) {
  const formik = useFormik({
    initialValues: {
      firstName: row.userDto.firstName,
      secondName: row.userDto.secondName,
      phone: row.userDto.phone,
      email: row.userDto.email,
      products: row.productLinesDto,
      totalPrice: row.totalPrice,
      payment: !row.payment ? 0 : row.payment,
    },
    onSubmit: (values) => {
      console.log(values);
      //   handleSubmit(values);
    },
  });

  const [paymentStatus, setPaymentStatus] = useState("Не оплачено");
  const [totalAmount, setTotalAmount] = useState(formik.values.totalPrice);
  const [isEdit, setIsEdit] = useState(false);

  const getTotalAmount = () => {
    // const amount = formik.values.totalPrice - formik.values.payment;
    // const amount = formik.values.totalPrice - 0;
    // debugger;
    const amount = formik.values.totalPrice - formik.values.payment;
    setTotalAmount(amount);
    if (amount === 0) {
      setPaymentStatus("Оплачено");
    } else {
      setPaymentStatus("Не оплачено");
    }
  };

  return (
    <Form onSubmit={formik.handleSubmit}>
      <Box
        sx={{
          // width: "1061px",
          height: "100%",
          width: "1143px",
          borderRadius: "50px 0px 0px 50px",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "rgb(50, 78, 189)",
          padding: "28px 32px 56px 32px",
          //   alignItems: "center",
          //   textAlign: "center",
        }}
      >
        <Box sx={{ position: "absolute", top: "2%", left: "92%" }}>
          <CloseIcon
            sx={{
              width: "24px",
              height: "24px",
              color: (theme) => theme.palette.text.secondary,
              "&:hover": { cursor: "pointer" },
            }}
            onClick={() => handleClose()}
          />
        </Box>

        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography
              variant="h3"
              sx={{
                color: (theme) => theme.palette.text.secondary,
              }}
            >
              Замовлення № {row.id}
            </Typography>
            <Typography
              sx={{
                color: (theme) => theme.palette.text.secondary,
              }}
            >
              Створено {row.creationDate}
            </Typography>
            <Typography
              sx={{
                color: (theme) => theme.palette.text.secondary,
              }}
            >
              Останнє оновлення {row.updateDate}
            </Typography>
          </Box>

          <Box sx={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <Box
              sx={{
                display: "flex",
                // padding: "16px",
                width: "183px",
                height: "57px",
                textAlign: "center",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "25px",
                background: "#D13634",
              }}
            >
              <Typography
                sx={{
                  color: (theme) => theme.palette.text.secondary,
                }}
              >
                {paymentStatus}
              </Typography>
            </Box>
            <StatusSelect orderStatus={row.status} />
          </Box>
        </Box>

        <Grid container spacing={2} sx={{ mt: "24px" }}>
          <Grid item xs={12}>
            <Products products={formik} />
          </Grid>
          <Grid item xs={6}>
            <CustomerData formik={formik} isEdit={isEdit} />
          </Grid>
          <Grid item xs={6}>
            <PaymentAndDelivery formik={formik} />
          </Grid>
        </Grid>

        <Box
          sx={{
            width: "505px",
            mt: "28px",
            // mr: "30px",
            marginLeft: "auto",
          }}
        >
          <Divider
            orientation="horizontal"
            sx={{
              borderColor: "#BDCAFF",
              borderWidth: "1px",
              width: "100%",
            }}
          />
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              mt: "8px",
              color: "#FAF9FB",
            }}
          >
            <Typography>Оплачено</Typography>
            <Input
              readOnly={!isEdit}
              value={formik.values.payment}
              onChange={(event) => {
                formik.setFieldValue("payment", event.target.value);
                getTotalAmount();
              }}
              sx={{
                borderRadius: "5px",
                border: "1px solid #AAA",
                padding: "8px",
                minWidth: "52px",
              }}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              mt: "8px",
              color: "#FAF9FB",
            }}
          >
            <Typography variant="h4">Сума до оплати</Typography>
            <Typography variant="h4">{totalAmount} ₴</Typography>
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            mt: "16px",
          }}
        >
          <Box sx={{ display: "flex", gap: "24px" }}>
            <Button
              startIcon={
                <LocalPrintshopIcon sx={{ width: "24px", height: "24px" }} />
              }
              sx={{
                borderRadius: 5,
                border: "1px solid #FAF9FB",
                padding: "16px 40px",
                height: "56px",
                color: (theme) => theme.palette.common.white,
                backgroundColor: (theme) => theme.palette.primary.main,
                textDecoration: "none",
              }}
            >
              <Typography>Друкувати</Typography>
            </Button>
            <Button
              onClick={() => setIsEdit(!isEdit)}
              sx={{
                borderRadius: 5,
                padding: "18px 40px",
                background: "#FAF9FB",
                height: "56px",
                color: "#324EBD",
                textDecoration: "none",
              }}
            >
              <Typography>Редагувати</Typography>
            </Button>
          </Box>

          <Box sx={{ display: "flex", gap: "24px" }}>
            <Button
              sx={{
                borderRadius: 5,
                border: "1px solid #FAF9FB",
                padding: "16px 40px",
                height: "56px",
                color: (theme) => theme.palette.common.white,
                backgroundColor: (theme) => theme.palette.primary.main,
                textDecoration: "none",
                "&:hover": {
                  background: "#FAF9FB",
                  "& >p": { color: "#324EBD" },
                },
              }}
            >
              <Typography>Архівувати</Typography>
            </Button>
            <Button
              disabled={isEdit ? false : true}
              sx={{
                borderRadius: 5,
                padding: "18px 40px",
                background: isEdit ? "#FAF9FB" : "#AAA",
                height: "56px",
                textDecoration: "none",
                "&:hover": {
                  background: isEdit ? "#789DD1" : null,
                  "& >p": { color: isEdit ? "#FAF9FB" : null },
                },
              }}
            >
              <Typography
                sx={{
                  color: isEdit ? "#324EBD" : "#FAF9FB",
                }}
              >
                Зберегти зміни
              </Typography>
            </Button>
          </Box>
        </Box>
      </Box>
    </Form>
  );
}

export default FormData;