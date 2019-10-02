import User from '../models/users';

export async function getAllUser(req, res) {
  try {
    const data = await User.find().sort({ createAt: -1 });

    return res.status(200).json({
      data
    });
  } catch (error) {
    return res.status(400).json({
      error
    });
  }
}

export async function getUserById(req, res) {
  try {
    const data = await User.findById(req.params.id);

    if (!data) {
      return res.status(404).json({
        error: 'Not found user'
      });
    }

    return res.status(200).json({
      data
    });
  } catch (error) {
    return res.status(400).json({
      error
    });
  }
}

export async function createUser(req, res) {
  const { name, email, phone } = req.body;

  // Simple validate
  if (!name || !email) {
    return res.status(400).json({
      error: 'Invalid params'
    });
  }

  try {
    const findUser = await User.findOne({ email });

    if (findUser) {
      return res.status(400).json({
        error: 'Email is exist, please change email'
      });
    }

    const newUser = new User({
      name,
      email,
      phone
    });

    await newUser.save();

    return res.status(201).json({
      data: newUser
    });
  } catch (error) {
    return res.status(400).json({
      error
    });
  }
}

export async function updateUser(req, res) {
  const { name, phone } = req.body;

  if (!name && !phone) {
    return res.status(400).json({
      error: 'Invalid params'
    });
  }

  try {
    const data = await User.findById(req.params.id);

    if (!data) {
      return res.status(404).json({
        error: 'Not found user'
      });
    }

    if (name) {
      data.name = name;
    }

    if (phone) {
      data.phone = phone;
    }

    await data.save();

    return res.status(200).json({
      data
    });
  } catch (error) {
    return res.status(400).json({
      error
    });
  }
}

export async function deleteUserById(req, res) {
  try {
    const findUser = await User.findById(req.params.id);

    await findUser.remove();

    return res.status(200).json({
      data: 'Delete success'
    });
  } catch (error) {
    return res.status(400).json({
      error
    });
  }
}
