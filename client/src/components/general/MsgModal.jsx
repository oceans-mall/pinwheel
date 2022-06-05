// import {Modal, Pressable, View, Text, StyleSheet} from "react-native"
// export const MsgModal = (props) => {
//   return (
//     <Modal
//       transparent
//       visible={modal}
//       onRequestClose={props.handleClose}
//       animationType="slide"
//     >
//       <View style={styles.modalContainer}>
//         <View style={styles.modal}>
//           <View style={styles.modal_header}>
//             <Text>SUMMARY</Text>
//           </View>
//           <View style={styles.modal_body}>
//             <Text style={{ textAlign: "center" }}>
//               Current Total: &#x20B5;200
//             </Text>
//           </View>
//           <Pressable
//             style={{
//               alignItems: "center",
//               borderBottomLeftRadius: 20,
//               borderBottomRightRadius: 20,
//               backgroundColor: "#00ffff",
//             }}
//             onPress={props.onPressFunction}
//             android_ripple={{ color: "#fff" }}
//           >
//             <Text style={{ fontSize: 16 }}>OK</Text>
//           </Pressable>
//         </View>
//       </View>
//     </Modal>
//   );
// };

// const styles= StyleSheet.create({
   
//   modalContainer: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "#0000001",
//   },
//   modal: {
//     width: 200,
//     height: 200,
//     backgroundColor: "#fff",
//     borderRadius: 20,
//   },
//   modal_header: {
//     height: 50,
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "#00ffff",
//     borderTopRightRadius: 20,
//     borderTopLeftRadius: 20,
//   },
//   modal_body: {
//     height: 130,
//     justifyContent: "center",
//     alignItems: "center",
//   },   
// })