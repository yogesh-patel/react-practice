import React from "react";
import PropTypes from "prop-types";
import tasksCardStyle from "assets/jss/material-dashboard-react/tasksCardStyle";
import {
  withStyles,
  Card,
  CardContent,
  CardHeader,
  Grid
} from "material-ui";


import {
  StatsCard,
  ChartCard,
  TasksCard,
  RegularCard,
  Table,
  ItemGrid
} from "components";

const LoginComponent = (props) => {
  const {classes} = props;
  return (
      <Grid container alignItems="center" justify="center" style={{height: 500}}>
        <ItemGrid xs={12} sm={12} md={4}>
          <Card className={classes.card}>
            <CardHeader
                classes={{
                  root: classes.cardHeader,
                  title: classes.cardTitle,
                  content: classes.cardHeaderContent
                }}
                title="Login"/>
            <CardContent>
              <div>Login</div>
            </CardContent>
          </Card>
        </ItemGrid>
      </Grid>   )
}

LoginComponent.propTypes = {};

export default withStyles(tasksCardStyle)(LoginComponent);