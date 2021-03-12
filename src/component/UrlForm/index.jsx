import React, { useEffect, useState } from "react";
import { Form, FormGroup, Label, Input, Table } from "reactstrap";
import shortid from "shortid";
import "./style.css";

const UrlForm = ({ label, data, handleChangeValue }) => {
  const [url, setUrl] = useState("");
  useEffect(() => {
    setUrl(data.url);
  }, [data]);
  const handleChangeValueDown = (event) => {
    setUrl(event.target.value);
    handleChangeValue(event.target.value);
  };
  return (
    <Form className="url-component">
      <FormGroup>
        <Label for="exampleEmail">{label}</Label>
        <Input
          type="URL"
          value={url}
          onChange={handleChangeValueDown}
          id="exampleEmail"
          placeholder="Input URL here"
        />
      </FormGroup>
      {data?.return.length ? (
        <Table size="md" bordered>
          <thead>
            <tr>
              <th>#</th>
              <th>Category</th>
              <th>Percent</th>
            </tr>
          </thead>
          <tbody>
            {data.return.map((n, index) => {
              return (
                <tr key={shortid.generate()}>
                  <td>{index + 1}</td>
                  <td>{n.kind}</td>
                  <td>{n.percent + " %"}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      ) : null}
    </Form>
  );
};

export default UrlForm;
