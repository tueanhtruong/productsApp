import React from "react";
import { Form, FormGroup, Label, Input, Table } from "reactstrap";
import shortid from "shortid";
import "./style.css";

const UrlForm = ({ label, data, resultData, handleChangeValue }) => {
  const handleChangeValueDown = (event) => {
    handleChangeValue(event.target.value);
  };
  return (
    <Form className="url-component">
      <FormGroup>
        <Label for="exampleEmail">{label}</Label>
        <Input
          type="URL"
          value={data}
          onChange={handleChangeValueDown}
          id="exampleEmail"
          placeholder="Input URL here"
        />
      </FormGroup>
      {resultData && (
        <Table size="md" bordered>
          <thead>
            <tr>
              <th>#</th>
              <th>Category</th>
              <th>Percent</th>
            </tr>
          </thead>
          <tbody>
            {resultData.map((n, index) => {
              return (
                <tr key={shortid.generate()}>
                  <td>{index + 1}</td>
                  <td>{n.kind}</td>
                  <td>{`${n.percent} %`}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      )}
    </Form>
  );
};

export default UrlForm;
