import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";

import HomeIcon from "@mui/icons-material/Home";
import ThreeDRotationIcon from "@mui/icons-material/ThreeDRotation";
import AltRouteIcon from "@mui/icons-material/AltRoute";

import { generateFeatureClass } from "../../data/featureClasses";

export default function DataSouceCount() {
  return (
    <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <HomeIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary="Levituum"
          secondary={`${
            generateFeatureClass().metaandmed.length +
            generateFeatureClass().punktobjektid.length +
            generateFeatureClass().joonobjektid.length +
            generateFeatureClass().pindobjektid.length +
            generateFeatureClass().pindobjektidOverlap.length
          } kihti`}
        />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <AltRouteIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary="Tuletiskihid"
          secondary={`${
            generateFeatureClass().tuletiskihidLines.length +
            generateFeatureClass().tuletiskihidPolygons.length
          } kihti`}
        />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <ThreeDRotationIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary="3D kihid"
          secondary={`${
            generateFeatureClass().lod2.length +
            generateFeatureClass().lod1.length +
            generateFeatureClass().lod0.length
          } kihti`}
        />
      </ListItem>
    </List>
  );
}
