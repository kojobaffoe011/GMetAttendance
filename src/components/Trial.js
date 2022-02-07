import React, { useState } from "react";

const Trial = () => {
  const [display_message, set_display_message] = useState(true);

  const message_to_display = "displayed msg";
  const other_message_to_display = "your morda";

  const toggle_display_msg = () => {
    if (display_message) {
      set_display_message(false);
    } else {
      set_display_message(true);
    }
  };

  return (
    <div>
      {display_message && message_to_display}

      {display_message || other_message_to_display}
      <button onClick={toggle_display_msg}>toggle</button>
    </div>
  );
};

export default Trial;
