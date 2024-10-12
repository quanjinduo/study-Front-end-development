// src/MyForm.js
import React from 'react';
import { ProForm, ProFormDigit } from '@ant-design/pro-form';


const MyForm = () => {
    const onFinish = (values) => {
        // 在控制台输出表单的值
        console.log('提交的数据:', values);
      };

  return (
    <ProForm onFinish={onFinish} style={{ maxWidth: 600, margin: '0 auto' }}>
      <ProFormDigit
        name="percent"
        label="百分比"
        placeholder="请输入百分比"
        tooltip="请输入有效的百分比值"
        rules={[{ required: true, message: '请输入百分比!' }]}
        min={1}
        max={100}
        fieldProps={{
          precision: 0,
          addonAfter: '%',
        }}
      />
    </ProForm>
  );
};

export default MyForm;
