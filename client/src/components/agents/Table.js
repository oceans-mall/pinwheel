import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Alert,
  Text,
  Modal,
  Button,
} from "react-native";
import { DataTable } from "react-native-paper";
import { useSelector } from "react-redux";

export default function TestTable({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [orders, setOrders] = useState("");
  const { product, status, updatedAt } = useSelector(
    (state) => state.ordersummary?.orders
  );
  const orderhistory = useSelector((state) => state.ordersummary?.orderHistory);
  console.log("oder history", orderhistory);

  const ModalFuntion = (order) =>
    orderhistory.map((item) => {
      item.product.forEach((product) => product.id);
    });

  return (
    <View style={styles.container}>
      <DataTable>
        <DataTable.Header>
          <DataTable.Title>Fisher_ID</DataTable.Title>
          <DataTable.Title> Date</DataTable.Title>
          <DataTable.Title> Amount</DataTable.Title>
          <DataTable.Title>Status</DataTable.Title>
        </DataTable.Header>

        {orderhistory?.map((order, key) => (
          <TouchableOpacity
            key={key}
            // onPress={(() => setModalVisible(true), ModalFuntion(order))}
            onPress={() =>
              navigation.navigate("Modal", { product: order.product })
            }
          >
            <DataTable.Row>
              <DataTable.Cell>{order.fishermanId}</DataTable.Cell>
              <DataTable.Cell>{order.createdAt.split("T")[0]}</DataTable.Cell>
              <DataTable.Cell>
                {" "}
                &#x20B5;
                {order.total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
              </DataTable.Cell>
              <DataTable.Cell>
                <Text
                  style={status === "pending" ? styles.pending : styles.paid}
                >
                  {status}
                </Text>
              </DataTable.Cell>
            </DataTable.Row>
          </TouchableOpacity>
        ))}
      </DataTable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    paddingHorizontal: 30,
  },
  pending: {
    color: "red",
  },
  paid: {
    color: "green",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "flex-start",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});
