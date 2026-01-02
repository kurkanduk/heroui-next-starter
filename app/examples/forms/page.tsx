"use client";

import { useState } from "react";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Input,
  Textarea,
  Select,
  SelectItem,
  Checkbox,
  Radio,
  RadioGroup,
} from "@heroui/react";
import Stack from "@/components/Stack";
import Typography from "@/components/Typography";
import HeaderLayout from "@/app/layout/HeaderLayout";

export default function FormsPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    country: "",
    newsletter: false,
    preference: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission here
  };

  return (
    <HeaderLayout>
      <Stack spacing={8} className="max-w-2xl mx-auto p-8">
        <Stack spacing={4}>
          <Typography variant="h1">Form Examples</Typography>
          <Typography variant="body1" color="secondary">
            Examples of form components using HeroUI
          </Typography>
        </Stack>

        <Card>
          <CardHeader>
            <Typography variant="h3">Contact Form</Typography>
          </CardHeader>
          <CardBody>
            <form onSubmit={handleSubmit}>
              <Stack spacing={6}>
                <Input
                  label="Name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  isRequired
                />

                <Input
                  type="email"
                  label="Email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  isRequired
                />

                <Select
                  label="Country"
                  placeholder="Select your country"
                  selectedKeys={formData.country ? [formData.country] : []}
                  onSelectionChange={(keys) => {
                    const selected = Array.from(keys)[0] as string;
                    setFormData({ ...formData, country: selected });
                  }}
                >
                  <SelectItem key="us">United States</SelectItem>
                  <SelectItem key="uk">United Kingdom</SelectItem>
                  <SelectItem key="ca">Canada</SelectItem>
                  <SelectItem key="de">Germany</SelectItem>
                </Select>

                <Textarea
                  label="Message"
                  placeholder="Enter your message"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  minRows={4}
                />

                <Checkbox
                  isSelected={formData.newsletter}
                  onValueChange={(checked) =>
                    setFormData({ ...formData, newsletter: checked })
                  }
                >
                  Subscribe to newsletter
                </Checkbox>

                <RadioGroup
                  label="Preferred contact method"
                  value={formData.preference}
                  onValueChange={(value) =>
                    setFormData({ ...formData, preference: value })
                  }
                >
                  <Radio value="email">Email</Radio>
                  <Radio value="phone">Phone</Radio>
                  <Radio value="sms">SMS</Radio>
                </RadioGroup>

                <Stack direction="row" spacing={4} className="justify-end">
                  <Button
                    type="button"
                    variant="bordered"
                    onPress={() =>
                      setFormData({
                        name: "",
                        email: "",
                        message: "",
                        country: "",
                        newsletter: false,
                        preference: "",
                      })
                    }
                  >
                    Reset
                  </Button>
                  <Button type="submit" color="primary">
                    Submit
                  </Button>
                </Stack>
              </Stack>
            </form>
          </CardBody>
        </Card>
      </Stack>
    </HeaderLayout>
  );
}
