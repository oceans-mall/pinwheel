// import React from "react";
// import { ScrollView, StyleSheet, Text, View } from "react-native";
// import { Button } from "react-native-paper";
// import { Table, Row, Rows, TableWrapper } from "react-native-table-component";
// import COLORS from "../../consts/colors";

// export const RecentTrade = () => {
//   const tableData = {
//     headerOfTable: ["Id", "Name", "Date", "Amount (GHS)", "Status"],
//     dataForTable: [
//       ["1", "Agbetsi Tsito", "20/11/21", "50", "paid"],
//       ["2", "Agbetsi Tsito", "20/11/21", "50", "paid"],
//       ["3", "Agbetsi Tsito", "20/11/21", "50", "paid"],
//       ["4", "Agbetsi Tsito", "20/11/21", "50", "paid"],
//       ["5", "Agbetsi Tsito", "20/11/21", "50", "paid"],
//       ["6", "Agbetsi Tsito", "20/11/21", "50", "paid"],
//       ["7", "Agbetsi Tsito", "20/11/21", "50", "paid"],
//       ["8", "Agbetsi Tsito", "20/11/21", "50", "pending"],
//       ["9", "Agbetsi Tsito", "20/11/21", "50", "paid"],
//       ["10", "Agbetsi Tsito", "20/11/21", "50", "paid"],
//       ["11", "Agbetsi Tsito", "20/11/21", "50", "paid"],
//     ],
//   };

//   return (
//     <View style={styles.container}>
//       <Text
//         style={{
//           textAlign: "center",
//           color: COLORS.primary,
//           fontSize: 15,
//           margin: 5,
//           fontWeight: "600",
//           marginBottom: 10,
//         }}
//       >
//         RECENT TRANSACTIONS
//       </Text>
//       <ScrollView horizontal={false}>
//         <Table borderStyle={styles.border}>
//           <Row
//             data={tableData.headerOfTable}
//             style={styles.head}
//             textStyle={styles.text}
//           />
//           <Rows data={tableData.dataForTable} textStyle={styles.text} />
//         </Table>
//       </ScrollView>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 4,
//     padding: 10,
//     backgroundColor: "#fff",
//     margin: 10,
//     borderRadius:5,
//     shadowColor: "#000",
//     shadowOffset: {
//       width: 0,
//       height: 2,
//     },
//     shadowOpacity: 0.3,
//     shadowRadius: 3.84,
//     elevation: 7,
//   },
//   head: {
//     height: 40,
//     backgroundColor: "#f1f8ff",
//   },
//   text: {
//     textAlign: "center",
//     fontSize: 12,
//     margin: 3,
//   },
//   border: { borderWidth: 2, borderColor: "#c8e1ff" },
// });
