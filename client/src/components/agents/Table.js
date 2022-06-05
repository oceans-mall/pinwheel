import React from "react";
import { View, StyleSheet } from "react-native";
import { DataTable } from "react-native-paper";
import { useSelector } from "react-redux";

export default function TestTable() {
  const { product, status, createdAt } = useSelector(
    (state) => state.ordersummary?.orders
  );
const dateCreate = createdAt.toISOString().split('T')[0]
  return (
    <View style={styles.container}>
      <DataTable>
        <DataTable.Header>
          <DataTable.Title>ID</DataTable.Title>
          <DataTable.Title>DATE</DataTable.Title>
          <DataTable.Title>NAME</DataTable.Title>
          <DataTable.Title>COST</DataTable.Title>
          <DataTable.Title>WEIGHT</DataTable.Title>
          <DataTable.Title>STATUS</DataTable.Title>
        </DataTable.Header>

        {product.map((order, key) => (
          <DataTable.Row>
            <DataTable.Cell>{order.id}</DataTable.Cell>
            <DataTable.Cell>{dateCreate}</DataTable.Cell>
            <DataTable.Cell>{order.name}</DataTable.Cell>
            <DataTable.Cell>{order.cost}</DataTable.Cell>
            <DataTable.Cell>{order.weight}</DataTable.Cell>
            <DataTable.Cell style={styles.pending}>{status}</DataTable.Cell>
          </DataTable.Row>
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
});
